import React, {useState} from 'react' 


const MovieList = () => {

    const movies =[
        "Dazed and Confused",
        "Trainspotting",
        "Friday the 13th",
        "Amelie",
        "Romper Stomper"
    ]
    const [movieList, setMovieList] = useState(movies)
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovieList([...movieList, value])
        setValue("")

    }

    const handleChange = (e) => {
        setValue(e.target.value)

    }

    return(
        <div>
            <h1>movie list</h1>
            <p>{
                movieList.map(m => {
                return <li>{m}</li>
                })
                }</p>


            <form onSubmit={handleSubmit} >
                <input
                type="text"
                name="movie"
                value={value}
                onChange={handleChange}
                placeholder="add new movie..." 
                />
                <input type="submit" value="add" />

            </form>

        </div>
    )
}


export default MovieList