import React, {useState} from 'react'

const YellingGreeter = (props) => {

    const [message, setMessage] = useState("")
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(value.toUpperCase())
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <div>
            <div className="heading">
                <h1>Enter a message below and have it yelled back at you </h1>
            </div>
            
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="message"
                placeholder="enter message here..."
                onChange={handleChange}
                />
                <input 
                type="submit"
                value="yell"
                />
            </form>
                
            <h1>{message}</h1>
        </div>
    
    )
    
}

export default YellingGreeter