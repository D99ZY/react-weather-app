import React, { useContext, useState, useEffect } from 'react';
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

    // State
    const [currentUnit, setCurrentUnit] = useState<unit>(0);
    const [nextUnit, setNextUnit] = useState<unit>(1);
    const [temp, setTemp] = useState<number>(Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10);

    // Change unit of temperature on button click
    const changeUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('handled');

        if (currentUnit === 0) {
            setTemp(Math.round(((weather.temperature * (9/5) - 459.67) + Number.EPSILON) * 10) / 10);
            setCurrentUnit(1);
            setNextUnit(2);
        }
        else if (currentUnit === 1) {
            setTemp(Math.round(((weather.temperature) + Number.EPSILON) * 10) / 10);
            setCurrentUnit(2);
            setNextUnit(0);
        }
        else {
            setTemp(Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10);
            setCurrentUnit(0);
            setNextUnit(1);
        }
    };

    useEffect(() => {
        if (currentUnit === 0) {
            setTemp(Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10);
        }
        else if (currentUnit === 1) {
            setTemp(Math.round(((weather.temperature * (9/5) - 459.67) + Number.EPSILON) * 10) / 10);
        }
        else {
            setTemp(Math.round(((weather.temperature) + Number.EPSILON) * 10) / 10);
        }
    }, [currentUnit, weather]);


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