import { useCallback, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Time } from '../context/types';
import { updateTime } from '../context/actions';
import './Location.css';

const Location = () => {

    // Constants
    const TIME_BASE_URL: string = 'https://dev.virtualearth.net/REST/v1/timezone/';
    const TIME_API_KEY = process.env.REACT_APP_TIME_API_KEY;
    
    // Context
    const {
        dispatch,
        state: { weather, time }
    } = useContext(GlobalContext);

    // Update time in global state
    const fetchTime = useCallback(async () => {

        // Initiate newTime variable of type Time
        let newTime: Time;

        // Call fetch API to retrieve data
        const res = await fetch(TIME_BASE_URL + weather.lat + ',' + weather.long + '?key=' + TIME_API_KEY);
        const data = await res.json();

        // Convert date format from string <YYYY-MM-DDTHH:MM:SS> to string array
        let localTime: string = data.resourceSets[0].resources[0].timeZone.convertedTime.localTime;        
        let localTimeArray: string[] = localTime.replaceAll('-', '$').replaceAll('T', '$').replaceAll(':', '$').split('$');

        // Populate newTime variable with API data
        newTime = {
            year: localTimeArray[0],
            month: localTimeArray[1],
            day: localTimeArray[2],
            hour: localTimeArray[3],
            minute: localTimeArray[4],
        };

        // Update global state with newTime
        dispatch(updateTime(newTime));
    }, [TIME_API_KEY, dispatch, weather.lat, weather.long]);

    // Call fetchTime on first render and each time global state weather updates
    useEffect(() => {
        fetchTime();
    }, [fetchTime, weather]);

    // JSX
    return (
        <div className='location'>
            <h2>
                {weather.city}, {weather.country}
            </h2>
            <h4>
                {time.hour}:{time.minute} {time.day}/{time.month}/{time.year}
            </h4>
        </div>
    );
};

export default Location;
