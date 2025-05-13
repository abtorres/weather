import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const fetchWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

        try {
            const response = await axios.get(url);
            setWeather(response.data);
            setCity(''); // Clears the search bar after fetching
        } catch (error) {
            alert("City not found! Try again.");
        }
    };

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            <h2>Weather App</h2>

            {/* Input & Search Section */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchWeather()} // Enter key functionality
                />
                <button onClick={fetchWeather}>Get Weather</button>
            </div>

            {weather && (
                <div className="weather-container">
                    {/* City Name */}
                    <div className="city-container">
                        <h2>{weather.location.name}, {weather.location.country}</h2>
                    </div>

                    {/* Today's Weather - Hourly Forecast Inside */}
                    <div className="today-container">
                        <h3>Today ({weather.forecast.forecastday[0].date})</h3>

                        {/* Temperature Section */}
                        <div className="temperature-container">
                            <p>Temperature: {weather.forecast.forecastday[0].day.avgtemp_c}°C</p>
                        </div>

                        {/* Condition Section */}
                        <div className="condition-container">
                            <p>Condition: {weather.forecast.forecastday[0].day.condition.text}</p>
                            <img src={weather.forecast.forecastday[0].day.condition.icon} alt="weather icon" />
                        </div>

                        {/* Hourly Forecast (Now Inside `today-container`) */}
                        <div className="hourly-container">
                            <h4>Hourly Forecast</h4>
                            <div className="hourly-row">
                                {weather.forecast.forecastday[0].hour.slice(0, 12).map((hour, index) => (
                                    <div key={index} className="hourly-card">
                                        <p>{hour.time.split(" ")[1]}</p>
                                        <p>Temp: {hour.temp_c}°C</p>
                                        <img src={hour.condition.icon} alt="hourly icon" />
                                    </div>
                                ))}
                            </div>

                            <div className="hourly-row">
                                {weather.forecast.forecastday[0].hour.slice(12, 24).map((hour, index) => (
                                    <div key={index} className="hourly-card">
                                        <p>{hour.time.split(" ")[1]}</p>
                                        <p>Temp: {hour.temp_c}°C</p>
                                        <img src={hour.condition.icon} alt="hourly icon" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;