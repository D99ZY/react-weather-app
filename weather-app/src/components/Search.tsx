import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Weather } from '../context/types';
import { updateWeather } from '../context/actions';
import './Search.css';

const Search = () => {

    // Constants
    const WEATHER_BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather';
    const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    
    // Randomize initial city
    const cityList: string[] = ['Amsterdam', 'Andorra la Vella', 'Antwerp', 'Athens', 'Barcelona', 'Beijing', 'Belgrade', 'Berlin', 
        'Bratislava', 'Bucharest', 'Bucharest', 'Budapest', 'Buenos Aires', 'Cairo', 'Cape Town', 'Chicago', 'Chisinau', 'Copenhagen', 
        'Dublin', 'Helsinki', 'Istanbul', 'Karachi', 'Kiev', 'Lagos', 'Lisbon', 'Ljubljana', 'London', 'Luxembourg', 'Madrid', 'Madrid', 
        'Manila', 'Mexico City', 'Miami', 'Minsk', 'Moscow', 'Mumbai', 'New York', 'Nicosia', 'Oslo', 'Paris', 'Podgorica', 'Prague', 
        'Pristina', 'Riga', 'Rome', 'Shanghai', 'Skopje', 'Sofia', 'Stockholm', 'Sydney', 'Tallinn', 'Tirana', 'Tokyo', 'Vienna', 
        'Vilnius', 'Warsaw', 'Zagreb', 'Zagreb', 'Zurich',
    ];
    const randomNumber: number = Math.floor(Math.random() * cityList.length + 1);
    const initialCity: string = cityList[randomNumber];

    // Context
    const { dispatch } = useContext(GlobalContext);

    // State
    const [city, setCity] = useState<string>('');

    // Submit button function
    const onSubmitHandler = (e: React.FormEvent) => {
        // Prevent page reload
        e.preventDefault();

        // Check textbox is not empty
        if (city !== '') {
            fetchWeather(city);
        }
    };
    
    // Update weather in global state
    const fetchWeather = (location: string) => {
        // Initiate newWeather variable of type Weather
        let newWeather: Weather;

        // Call fetch API to retrieve data
        fetch(WEATHER_BASE_URL + '?q=' + location + '&appid=' + WEATHER_API_KEY)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            })
            .then((data) => {
                // Populate newWeather variable with API data
                newWeather = {
                    city: data.name,
                    country: data.sys.country,
                    lat: data.coord.lat,
                    long: data.coord.lon,
                    temperature: data.main.temp,
                    conditions: data.weather[0].main,
                };
                // Update global state with newWeather
                dispatch(updateWeather(newWeather));
            })
            .catch((err) => {
                console.log('Error:', err);
            })
            .finally(() => {
                // Clear input textbox
                setCity('');
            })
    };

    // Call fetchWeather with initialCity on mount
    useEffect(() => {
        fetchWeather(initialCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // JSX
    return (
        <div className='search'>
            <form onSubmit={onSubmitHandler}>
                <input 
                    type='text'
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCity(e.target.value);
                    }}
                    placeholder='Enter a new city'
                />
                <button type='submit'>&gt;</button>
            </form>
        </div>
    );
};

export default Search;
