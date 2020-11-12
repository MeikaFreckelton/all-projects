import React, {useState} from 'react'
import html2canvas from 'html2canvas'
import './../styles/businessCard.css'


const BusinessCard = () => {
    const [name, setName] = useState("Meika Freckelton")
    const [title, setTitle] = useState("Junior Developer")
    const [phone, setPhone] = useState("0452634523")
    const [email, setEmail] = useState("meikafreckelton@gmail.com")
    const [address, setAddress] = useState("204 Derby Street, Penrith 2750 NSW")
    const [hex, setHex] = useState("lightBlue")
    const [fontHex, setFontHex] = useState("black")


    const handleChange = (e) => {
        const targeted = e.target.name
        const val = e.target.value
        if (targeted === "name"){
            setName(val)
        } else if (targeted === "phone"){
            setPhone(val)
        } else if (targeted === "email"){
            setEmail(val)
        } else if (targeted === "address"){
            setAddress(val)
        } else if (targeted === "title"){
            setTitle(val)
        }
        

    }

    const saveAsPng = (e) => {
        const divToPrint = document.getElementById("businessCard")
        html2canvas(divToPrint).then(function(canvas) {
            const divImage = canvas.toDataURL("image/png")
            console.log(divImage)
            // divImage.save("download.png")
            const a =document.createElement("a")
            a.setAttribute("download", "myBusinessCard.png")
            a.setAttribute('href', divImage)
            a.click()
        })
    }

    const divStyles = {
        padding: "1%",
        display: "flex",
        

    }

    const bgColor = {
        backgroundColor: hex,
        width: "3.5in",
        height: "2in",
        padding: "1%",
        color: fontHex
    }

    const changeHandler = (e) => {
        // console.log(e.target.value)
        
        if (e.target.name === "hex"){
            setHex(e.target.value)
        } else if (e.target.name === "fontHex"){
            setFontHex(e.target.value)
        }
    }



    return (
        <div id="businessCardWrapper">
            <div className="heading">
                <h1>Business card maker</h1>
            </div>

            <div className="cardAndForm">
            <div className="bCard">
                <div id="businessCard" style={bgColor}>
                    <p id="name">{name}</p>
                    <p id="title">{title}</p>
                    <p id="phone">{phone}</p>
                    <p id="email">{email}</p>
                    <p id="address">{address}</p>

                </div>

                </div>

                <div className="bForm">
                <form className="businessForm">
                    <div style={divStyles}>
                        <input 
                        type="color"
                        value={hex}
                        onChange={changeHandler}
                        name="hex"
                        />
                        <input 
                        type="color"
                        value={fontHex}
                        onChange={changeHandler}
                        name="fontHex"
                        />

                    </div>
                    
                    
                    <div style={divStyles} className="form-">
                        <label>
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="name here..."
                        />
                    </div>
                    <div style={divStyles} className="form-">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            placeholder="title here..."
                        />
                    </div>
                    <div style={divStyles} className="form-">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            placeholder="phone number here..."
                        />
                    </div>
                    <div style={divStyles} className="form-">
                        <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                placeholder="email here..."
                        />
                    </div>
                    <div style={divStyles} className="form-">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            placeholder="address here..."
                        />
                    </div>
                </form>
                <button onClick={saveAsPng}>save as png</button>
                </div>


            </div>

            

            
            

            
        </div>
    )
}


export default BusinessCard