import { useEffect, useState } from "react";
import axios from "axios";

import NavButton from '../Home/NavButton';
import { House } from 'lucide-react'
import Title from '../Home/Title';

const API = "47b66ac0480d8d087a3f12b3855cec67";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState("");

    const getWeatherByCity = async (city) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather`,
                {
                    params: {
                        q: city,
                        appid: API,
                        units: "metric",
                        lang: "ru",
                    },
                }
            );
            setWeather(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getForecast = async (city) => {
        try {
            const res = await axios.get(
                "https://api.openweathermap.org/data/2.5/forecast",
                {
                    params: {
                        q: city,
                        appid: API,
                        units: "metric",
                        lang: "ru",
                    },
                }
            );

            console.log(res.data); // каждые 3 часа
            setForecast(res.data.list);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div >
            <Title name={"Weather"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <div className="m-3">

                <h1>🌤 Погода</h1>
                <input value={city}
                placeholder="город..." 
                onChange={(e) => setCity(e.target.value)}/>

                <button onClick={() => getWeatherByCity(city)} className="bg-black text-white p-2 rounded-xl cursor-pointer dark:bg-white dark:text-black hover:text-red-500 duration-300">Узнать погоду</button>
                <button onClick={() => getForecast(city)} className="bg-black text-white p-2 rounded-xl cursor-pointer dark:bg-white dark:text-black hover:text-red-500 duration-300">Узнать погоду на 5 дней</button>

                {!weather ? (
                    <p>Нету данных о погоде</p>
                ) : (
                    <div>
                        <h2>{weather.name}</h2>
                        <p>Температура: {weather.main.temp}°C</p>
                        <p>Ощущается как: {weather.main.feels_like}°C</p>
                        <p>Погода: {weather.weather[0].description}</p>
                    </div>
                )}
                {forecast.map(f => (
                    <div key={f.dt}>
                        <h2>город: {f.dt_txt}</h2>
                        <p>Температура: {f.main.temp}°C</p>
                        <p>Ощущается как: {f.main.feels_like}°C</p>
                        <p>Погода: {f.weather[0].description}</p>
                        --------------------------
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Weather;