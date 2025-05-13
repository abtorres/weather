import React from "react";

const SelectedHourlyForecast = ({ hourlyData, selectedDate, darkMode }) => {
    return (
        <div className={`selected-hourly-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            {hourlyData && (
                <>
                    <h3>Hourly Forecast for {selectedDate}</h3>
                    <div className="hourly-row">
                        {hourlyData.slice(0, 12).map((hour, index) => (
                            <div key={index} className="hourly-card">
                                <p>{hour.time.split(" ")[1]}</p>
                                <p>{hour.temp_c}°C</p>
                                <img src={hour.condition.icon} alt="hourly icon" />
                            </div>
                        ))}
                    </div>
                    <div className="hourly-row">
                        {hourlyData.slice(12, 24).map((hour, index) => (
                            <div key={index} className="hourly-card">
                                <p>{hour.time.split(" ")[1]}</p>
                                <p>{hour.temp_c}°C</p>
                                <img src={hour.condition.icon} alt="hourly icon" />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SelectedHourlyForecast;