
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather = {temperature:25, conditions:"Sunny"}
  const color = weather.temperature >= 20 ? "red" : "blue";
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Weather Report</h1>
        <p >Temperature: <span style={{color:color}}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App
