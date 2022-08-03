import { useState, useContext, useEffect } from "react"
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
      if (feedbackEdit.edit === true) {
        setSelected(feedbackEdit.item.rating)
      }
    }, [feedbackEdit]
    )

    const handleChange = (e) => {
        // +e makes the string target a number
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)        
    }

    return (
        <ul className='rating'>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
      )    

}

export default RatingSelect

// The course had individual <li> tags for the rating buttons.
// The Github version had the iterator above

/*
return (
    <ul className="rating">
        <li>
            <input
                type='radio'
                id='num1'
                name='rating'
                value='1'
                onChange={handleChange}
                checked={selected === 1}
            />
            <label htmlFor='num1'>1</label>
        </li>
        <li>
            <input
                type='radio'
                id='num2'
                name='rating'
                value='2'
                onChange={handleChange}
                checked={selected === 2}
            />
            <label htmlFor='num2'>2</label>
        </li>        
    </ul>
  )
*/
