import { FaTimes, FaEdit } from 'react-icons/fa'    // font awesome from within react icons
import Card from "./shared/Card"
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

/*
import { useState } from 'react'
    // rating: var name, setRating: function to update
    // this is component-level state

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is a text rating')
    const handleClick = () => {
        setRating(10)
        setText('Some new rating text')
    }
    <button onClick={handleClick}>Click</button>
*/
