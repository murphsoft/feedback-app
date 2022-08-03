import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    // 
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is from context',
            rating: 7
        },
        {
            id: 2,
            text: 'A second rating entry',
            rating: 8
        }
    ])

    // used for edit/update
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)

        // add newFeedback to the state array
        setFeedback([newFeedback, ...feedback])
    }  
    
    const updateFeedback = (id, updItem) => {
        // loop through feedback array,
        // if an item in the array matches context (same ID),
        // then replace the ...item in the array with the ...updItem,
        // otherwise, just return the row in the array
        setFeedback(
            feedback.map((item) => 
                (item.id === id ? 
                    {...item, ...updItem } 
                    : item)
            )
        )
    }

    const deleteFeedback = (id) => {
        console.log('App', id)
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                addFeedback,
                deleteFeedback,
                editFeedback,
                updateFeedback
            }}
        > {children} </FeedbackContext.Provider>
    )

}

export default FeedbackContext