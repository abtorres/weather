import React from "react";

const UpcomingForecast = ({ forecast, selectDay, darkMode }) => {
    return (
        <div className={`upcoming-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h3>Next 4 Days</h3>
            <h4>**Click To See By The Hour Forecast**</h4>
            <div className={`forecast-row ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                {forecast.slice(1, 5).map((day, index) => (
                    <div key={index} className={`forecast-card ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => selectDay(day)}>
                        <p>{day.date}</p>
                        <img src={day.day.condition.icon} alt="weather icon" />
                        <p>High: {day.day.maxtemp_c}°C</p>
                        <p>Low: {day.day.mintemp_c}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingForecast;