import { Dispatch } from 'react';

// Types
export type Weather = {
    city: string;
    country: string;
    lat: number;
    long: number;
    temperature: number;
    conditions: string;
};

export type Time = {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
};

export type GlobalState = {
    weather: Weather;
    time: Time;
};

export type Action =
   | { type: 'UPDATE_WEATHER'; payload: Weather; }
   | { type: 'UPDATE_TIME'; payload: Time };

export type Context = {
    state: GlobalState;
    dispatch: Dispatch<Action>;
};
