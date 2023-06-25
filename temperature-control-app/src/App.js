import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue >= 30) return;

    const newTemperatureValue = temperatureValue + 1;

    if (newTemperatureValue >= 15) {
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperatureValue);
  }

  const decreaseTemperature = () => {

    if (temperatureValue < -5) return;

    const newTemperatureValue = temperatureValue - 1;

    if (newTemperatureValue < 15) {
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperatureValue)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className='button-container'>
        <button onClick={() => { increaseTemperature() }}>+</button>
        <button onClick={() => { decreaseTemperature() }}>-</button>
      </div>
    </div>
  )
}

export default App