import {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css';
import './App.css';
import Map from "./Map/Map.jsx";
import {Tooltip} from "react-leaflet";

function App() {
    const key = "56f2bc97b845efac4c65bf7d298969cf";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [coord, setCoord] = useState(null )

    useEffect(() => {
        if(city){
            fetch(`${url}&q=${city}&appid=${key}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data)
                    console.log(data.coords)
                    if(data.coord){
                        console.log(1)
                        setCoord([data.coord.lat, data.coord.lon])
                    }
                })
        }
    }, [city]);


    return (

        <>
            <form action="#" onSubmit={(event) => {
                event.preventDefault();
                console.log(city, weather);
                setCity(document.getElementById("city").value);
            }}>
                <input id={"city"} type="text" placeholder={"Enter a location"}/>
                <button type={"submit"}>Submit</button>
            </form>
            <div className="weather-item">
                    {city && weather && coord && <>
                <h2>Weather in {city}</h2>
                <div className="weather-info">
                        <p>Temperature: {weather.main?.temp} °C</p>
                        <p>Humidity: {weather.main?.humidity} %</p>
                        <p>Wind Speed: {weather.wind?.speed} m/s</p>
                        <p>Description: {weather.weather ? weather.weather[0].description : ""}</p>
                </div>
                        {coord && <Map coord={coord}>
                            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={true}>
                                Температура: {Math.round(weather.main.temp)} °C
                            </Tooltip>
                        </Map>}
                    </>
                    }
            </div>


        </>
    )
}

export default App
