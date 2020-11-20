import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {

    const ulStyles = {   
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-around",
        paddingInlineStart: "0",
        borderBottom: "1px solid #006aff",
        paddingBottom: "1%"
    }


    return(
        <div>
            





            <ul style={ulStyles}>
                <Link to="/" className="liStyles"><li>Home</li></Link>
                <Link to="/yellingGreeter" className="liStyles"><li>Yelling Greeter</li></Link>
                <Link to="/happyMessage" className="liStyles"><li>Happy message</li></Link>
                <Link to="/businessCard" className="liStyles"><li>Business Card</li></Link>
                <Link to="/cookieClicker" className="liStyles"><li>Cookie Clicker</li></Link>
                <Link to="/tweeter" className="liStyles"><li>Tweeter</li></Link>
                <Link to="/todolist" className="liStyles"><li>To Do List</li></Link>
                <Link to="/billAndTip" className="liStyles"><li>Bill and Tip</li></Link>
                <Link to="/MovieList" className="liStyles" ><li>Movie List</li></Link>
            </ul>
            
            
        </div>
    )
}


export default Navbar