import { Weather, Time, Action } from './types';

// Actions
export const updateWeather = (weather: Weather): Action => ({
    type: 'UPDATE_WEATHER',
    payload: weather,
});

export const updateTime = (time: Time): Action => ({
    type: 'UPDATE_TIME',
    payload: time,
});
