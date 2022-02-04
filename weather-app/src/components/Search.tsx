import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Weather } from '../context/types';
import { updateWeather } from '../context/actions';
import './Search.css';

const Search = () => {
    // Context
    const { dispatch } = useContext(GlobalContext);

    // State
    const [text, setText] = useState<string>('');

    // Constants
    const BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather';
    const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

    // Submit button function
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload

        // Check for empty text box


        fetchWeather();
    };
    
    // Update weather in global state
    const fetchWeather = () => {
        let newWeather: Weather;

        fetch(BASE_URL + '?q=' + text + '&appid=' + WEATHER_API_KEY)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            })
            .then((data) => {
                newWeather = {
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    conditions: data.weather[0].main
                };
                dispatch(updateWeather(newWeather));
            })
            .catch((err) => {
                console.log('Error:', err);
            })
    };

    return (
        <div className='search'>
            <form onSubmit={onSubmitHandler}>
                <input 
                    type='text'
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    placeholder='Enter a new city'
                />
                <button>&gt;</button>
            </form>
        </div>
    );
};

export default Search;
