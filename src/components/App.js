import React, { useEffect, useState } from "react"

const API = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null)

useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setImage(data.message))
}, [])

if (!image) {
    return <p>Loading...</p>
}
        return <img src={image} alt="A Random Dog"></img>

}

export default App;


