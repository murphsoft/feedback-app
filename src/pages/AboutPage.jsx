import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>Super Project Rater</h1> 
            <p>Created by Elevational Software</p> 
            
            <p>
                <Link to="/">Back To Home</Link>
            </p>    
        </div>
      
    </Card>
  )
}

export default AboutPage

// this would cause the page to refresh (the Link does not)
//                <a href="/">Back To Home</a>

