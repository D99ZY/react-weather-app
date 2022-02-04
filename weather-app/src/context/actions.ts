import { Weather, Action } from './types';

// Actions
export const updateWeather = (weather: Weather): Action => ({
    type: 'UPDATE_WEATHER',
    payload: weather,
});
