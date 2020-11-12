import React, {useState, useEffect} from 'react'

const CookieClicker = () => {
    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(0)
    const [autoIncrement, setAutoIncrement] = useState(0)
    const [autoMessage, setAutoMessage] = useState("spend 10 clicks to auto increment by 5 every 20 seconds")

    const hidden = {
        display: "none"
    }

    const block = {
        display: "block"
    }

    const [hiddenStyle, setHiddenStyle] = useState(hidden)


    const handlePlusClick = (e)=> {
        setCount(count + 1)
        setIncrement(increment + 1)
    }

    const handleMinusClick = (e)=> {
        setCount(count - 1)
        setDecrement(decrement + 1)
    }

    const handleIncreasedClick = (e) => {
        setCount(count - 10)
        if (autoIncrement === 0){
            setAutoIncrement((prev) => prev + 5)
            setAutoMessage("increase the auto count by 1 for 10 clicks")
        } else (
            setAutoIncrement((prev) => prev + 1)
        )
    }

    useEffect(() =>{
        if (autoIncrement > 0){
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount + autoIncrement)
            }, 5000)

            return () => {
                clearTimeout(timer);
            };
        } 

        if (count >= 20){
            setHiddenStyle(block)
        } 
    }, [autoIncrement, count])
    
    return (
        <div>
            <div className="heading">
                <h1>Cookie Clicker</h1>
            </div>
            
            <h2>{count}</h2>
            <h3>increment count: {increment}</h3>
            <h3>decrement count: {decrement}</h3>

            <button onClick={handlePlusClick}>+</button>
            <button onClick={handleMinusClick}>-</button>
            <button style={hiddenStyle} onClick={handleIncreasedClick}>{autoMessage}</button>


        </div>
    )
}


export default CookieClicker