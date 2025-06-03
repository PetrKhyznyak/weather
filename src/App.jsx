import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const key = "56f2bc97b845efac4c65bf7d298969cf";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});

    useEffect(() => {
        if(city){
            console.log(1)
            fetch(`${url}&q=${city}&appid=${key}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }, [city]);

    console.log(city)
    return (

        <>
            <form action="#" onSubmit={(event) => {
                event.preventDefault();
                console.log(document.getElementById("city").value)
                setCity(document.getElementById("city").value);
            }}>
                <input id={"city"} type="text"/>
                <button   type={"submit"}>Submit</button>
            </form>

        </>
    )
}

export default App
