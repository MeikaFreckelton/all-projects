import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    const btnStyles = {
        textDecoration: "none",
        backgroundColor: "#006aff",
        color: "#fff",
        padding: "0.75% 7%",
        margin: "2%",
        flexGrow: "1",
        borderRadius: "3px",
        fontSize: "1.5em"
    }
    const divStyles = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "40vw",
        margin: "3% auto",
        textAlign: "center"


    }

    const wrapperStyles = {
        backgroundColor: "#fff",
        padding: "1%",
        width: "60vw",
        margin: "4% auto",
        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.35)"
    }

    const headingStyles = {
        fontSize: "3rem"
    }

    return(
        <div>
            <div style={wrapperStyles}>
                <div className="heading">
                    <h1 style={headingStyles}>My react projects</h1>
                </div>
                <div style={divStyles}>
                    <Link to="/yellingGreeter" style={btnStyles}>Yelling Greeter</Link>
                    <Link to="/happyMessage" style={btnStyles}>Happy Message</Link>
                    <Link to="/businesscard" style={btnStyles}>Business Card</Link>
                    <Link to="/cookieclicker" style={btnStyles}>Cookie Clicker</Link>
                    <Link to="/tweeter" style={btnStyles}>Tweeter</Link>
                    <Link to="/todolist" style={btnStyles}>To Do List</Link>
                    <Link to="/billandtip" style={btnStyles}>Bill and Tip</Link>
                    <Link to="/movielist" style={btnStyles}>Movie List</Link>
                </div>
                    
            </div>
        </div>
    )
}

export default Home