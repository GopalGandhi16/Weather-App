import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./page.css";
import { useState } from 'react';

export default function Landing({updateInfo}) {
    const [city, setCity] = useState("");
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "fedc2b1fc1821977ed581e33105c8d70";

    async function fetchCityData() {
    let result = null;
    try {
        const response = await fetch(`${url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message); 
        }

        result = {
            city: city,
            temp: data.main.temp,
            min_temp: data.main.temp_min,
            max_temp: data.main.temp_max,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            description: data.weather[0].description
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("City not found or API error");
    }

    return result;
}


    function handleCityChange(e) {
        setCity(e.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (city.trim() !== "") {
            let info = await fetchCityData();
            updateInfo(info);
            setCity("");
        }
    }

    return (
        <div className="body">
            <div className="weather">
                <h1>Weather App</h1>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        id="city" 
                        label="City name" 
                        variant="outlined" 
                        required 
                        value={city} 
                        onChange={handleCityChange} 
                    />
                    <br /><br />
                    <Button variant="contained" type="submit" id="search">
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
}
