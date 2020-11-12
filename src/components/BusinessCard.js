import React, {useState} from 'react'
import html2canvas from 'html2canvas'

const BusinessCard = () => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


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
        padding: "1%"
    }

    const businesStyles = {
        backgroundColor: "lightPink",
        width: "23vw",
        minHeight: "20vh",
        padding: "1%"
    }



    return (
        <div>
            <h1>Business card maker</h1>
            <div id="businessCard" style={businesStyles}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <h3>{phone}</h3>
                <h4>{email}</h4>
                <p>{address}</p>

            </div>
            <button onClick={saveAsPng}>save as png</button>

            <form>
                
                <div style={divStyles}>
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
                <div style={divStyles}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="title here..."
                    />
                </div>
                <div style={divStyles}>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        placeholder="phone number here..."
                    />
                </div>
                <div style={divStyles}>
                    <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            placeholder="email here..."
                    />
                </div>
                <div style={divStyles}>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        placeholder="address here..."
                    />
                </div>
                
                
                
                

            </form>
        </div>
    )
}


export default BusinessCard