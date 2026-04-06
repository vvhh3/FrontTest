import { useEffect, useState } from "react";
import axios from "axios";

import NavButton from '../Home/NavButton';
import { House } from 'lucide-react'
import Title from '../Home/Title';

const API = "47b66ac0480d8d087a3f12b3855cec67";

const Weather = () => {
    const [forecast, setForecast] = useState([]);
    const [cityName, setCityName] = useState('')

    const [city, setCity] = useState("");

    const [flag, setFlag] = useState(false);

    const getForecast = async (city) => {
        if (!city) {
            alert("Введите город");
            return
        }
        try {
            setFlag(true);
            const res = await axios.get(
                "https://api.openweathermap.org/data/2.5/forecast",
                {
                    params: {
                        q: city,
                        appid: API, //API ключь
                        units: "metric", // система измерения
                        lang: "ru", //язык
                    },
                }
            );

            setCityName(res.data.city.name)
            setForecast(res.data.list);
            setFlag(false)
            setCity("")
        } catch (e) {
            console.log(e);
        }
    };

    const groupByDay = (list) => {
        const days = {};

        list.forEach((item) => {
            const date = item.dt_txt.split(" ")[0];

            if (!days[date]) {
                days[date] = [];
            }

            days[date].push(item);
        });

        return days;
    }

    const grouped = forecast ? groupByDay(forecast) : {};
    return (
        <div >
            <Title name={"Weather"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <div className="m-3">

                <h1 className="text-3xl font-bold mb-4 text-center">🌤 Погода</h1>

                <input
                    value={city}
                    placeholder="Введите город..."
                    onChange={(e) => setCity(e.target.value)}
                    className="border-2 border-gray-300 p-3 rounded-2xl mb-3 w-full 
                            dark:bg-gray-800 dark:border-white dark:text-white outline-none"
                />

                <button
                    onClick={() => getForecast(city)}
                    className="bg-black text-white p-3 rounded-2xl w-full mb-5 
                            dark:bg-gray-800 dark:border dark:border-gray-300 dark:text-white hover:scale-101 transition"
                    disabled={flag}
                >
                    {flag ? "Идет загрузка..." : "Узнать погоду"}
                </button>

                <p className="text-lg">Погода в: {cityName}</p>
                
                <div className="grid gap-4">
                    {Object.entries(grouped).map(([date, items]) => {
                        const day = items.find((i) =>
                            i.dt_txt.includes("12:00:00")
                        ) || items[0];

                        return (
                            <div
                                key={date}
                                className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md"
                            >
                                <h2 className="text-lg font-semibold mb-2">
                                    📅 {date}
                                </h2>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-2xl font-bold">
                                            {Math.round(day.main.temp)}°C
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            ощущается {Math.round(day.main.feels_like)}°C
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="capitalize">
                                            {day.weather[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Weather;