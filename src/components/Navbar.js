import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {

    const ulStyles = {   
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-around"
    }
    const liStyles = {
        textDecoration: "none"
    }

    return(
        <div>
            





            <ul style={ulStyles}>
                <Link to="/" style={liStyles}><li>home</li></Link>
                <Link to="/yellingGreeter" style={liStyles}><li>Yelling Greeter</li></Link>
                <Link to="/happyMessage" style={liStyles}><li>Happy message</li></Link>
                <Link to="/businessCard" style={liStyles}><li>Business Card</li></Link>
                <Link to="/cookieClicker" style={liStyles}><li>Cookie Clicker</li></Link>
                <Link to="/tweeter" style={liStyles}><li>Tweeter</li></Link>
                <Link to="/todolist" style={liStyles}><li>To Do List</li></Link>
                <Link to="/billAndTip" style={liStyles}><li>Bill and Tip</li></Link>
                <Link to="/MovieList" style={liStyles} ><li>Movie List</li></Link>
            </ul>
            
            
        </div>
    )
}


export default Navbar