import React, { useContext, useState, useEffect, useCallback } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Weather.css';

const Weather = () => {

    // Enum
    enum unit {
        C = 0,
        F = 1,
        K = 2,
    };

    // Context
    const {
        state: { weather }
    } = useContext(GlobalContext);

    // Initial temperature
    let initialTemp: number = Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10;

    // State
    const [currentUnit, setCurrentUnit] = useState<unit>(0);
    const [nextUnit, setNextUnit] = useState<unit>(1);
    const [temp, setTemp] = useState<number>(initialTemp);

    // Convert temperature to appropriate unit
    const convertTemp = useCallback((unit: unit): number => {
        let temperature: number;
        switch (unit) {
            case 0:
                temperature = Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10;
                break;
            case 1:
                temperature = Math.round(((weather.temperature * (9/5) - 459.67) + Number.EPSILON) * 10) / 10;
                break;
            case 2:
                temperature = Math.round(((weather.temperature) + Number.EPSILON) * 10) / 10;
                break;
            default:
                temperature = Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10;
        }
        return temperature;
    }, [weather.temperature]);

    // Change unit of temperature on button click
    const changeUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent page reload
        e.preventDefault();

        if (currentUnit === 0) {
            setTemp(convertTemp(nextUnit));
            setCurrentUnit(1);
            setNextUnit(2);
        }
        else if (currentUnit === 1) {
            setTemp(convertTemp(nextUnit));
            setCurrentUnit(2);
            setNextUnit(0);
        }
        else {
            setTemp(convertTemp(nextUnit));
            setCurrentUnit(0);
            setNextUnit(1);
        }
    };

    // Update temperature on weather change
    useEffect(() => {
        setTemp(convertTemp(currentUnit));
    }, [currentUnit, convertTemp, weather]);

    // JSX
    return (
        <div className='weather'>
            <div className='button-container'>
                <button onClick={changeUnit}>
                    {unit[nextUnit]}
                </button>
            </div>
            <h1>
                {temp}&deg;{unit[currentUnit]}
            </h1>
            <h3>
                {weather.conditions}
            </h3>
        </div>
    );
};

export default Weather;