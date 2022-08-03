
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import { useState } from 'react'
import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from './components/FeedbackList';
//import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink';
// FeedbackProvider is in {} because it is not the default export
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
    // no longer needed.  managed by FeedbackContext
    //const [feedback, setFeedback] = useState(FeedbackData)   

    return (
      <FeedbackProvider>

        <Router>
            <Header text='Rate My Website'/>

            <div className="container">
                <Routes>
               
                <Route exact path='/' 
                    element={ <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                    </> }>
                </Route>

                <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>            

        </Router>
      </FeedbackProvider>  
    ) 
}

export default App

/*
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'},
    ]
    const showLabel = true;

        // comments.map is native JS.  The input to the map function is 
    // a function.  So, the => creates an "arrow function" definition
    // inline.  The "key" is needed by React, and avoids a console error
    // for LI tags

            <div hidden >
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>

                {showLabel ? 'showLabel is true' : 'showLabel is false'}
                {showLabel && ' only show if showLabel is true'}
            </div>
            */