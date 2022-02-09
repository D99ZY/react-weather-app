import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Weather.css';

const Weather = () => {

    // Context
    const {
        state: { weather }
    } = useContext(GlobalContext);

    return (
        <div className='weather'>
            {
                // Add button to convert temp from C to F
            }
            <h1>
                {Math.round(((weather.temperature - 273.15) + Number.EPSILON) * 10) / 10}&deg;C
            </h1>
            <h3>
                {weather.conditions}
            </h3>
        </div>
    );
};

export default Weather;
