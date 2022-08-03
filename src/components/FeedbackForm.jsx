import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    // Fire when an event happens.  if the 2nd arg in [] is blank,
    // the useEffect will fire when the component loads.  Which 
    // could be good for loading data upon a page load.
    // Here it is set to fire if an edit of a Feedback entry is invoked.
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]
    )

    const [text, setText] = useState('')
    const [rating, setRating] = useState(1)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        console.log(e.target.value)

        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) { // check for less than 10
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }

        if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)   
        }

        setText('') 
    }

    return (
        <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange}
                    type="text" placeholder="Write a review"
                    value={text}
                />
                <Button type="submit" version="primary" 
                    isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
