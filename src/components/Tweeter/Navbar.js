import React from 'react'
import {Link} from 'react-router-dom'
// include a Link to home (Show all Twoots), and Add Twoot

const Nav = () => {
    const divStyle={
        display: 'flex',
        paddingLeft: "5%",
        // backgroundColor: "#f5f5f5"
    }
    const linkStyle = {
        fontSize: '1.5em',
        fontFamily: "PT Sans",
        margin: '.5em',
        color: "#1e2182",
        textDecoration: "none"
        

    }

    return (
        <div style={divStyle}>
            <Link style={linkStyle} to="/tweeter">Home</Link>
            <Link style={linkStyle} to="/tweeter/twoot/new">New Twoot</Link>
        </div>
    )
}


export default Nav