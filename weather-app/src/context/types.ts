import { Dispatch } from 'react';

// Types
export type Weather = {
    city: string;
    country: string;
    temperature: number;
    conditions: string;
};

export type GlobalState = {
    weather: Weather;
};

export type Action = {
    type: 'UPDATE_WEATHER'; 
    payload: Weather;
};

export type Context = {
    state: GlobalState;
    dispatch: Dispatch<Action>;
};
