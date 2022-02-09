import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { GlobalState, Context } from './types';

const initialState: GlobalState = {
    weather: { 
        city: 'London', 
        country: 'GB', 
        lat: 51.5085,
        long: -0.1257,
        temperature: 281.2, 
        conditions: 'Stormy', 
    },
    time: {
        year: '2023',
        month: '04',
        day: '05',
        hour: '11',
        minute: '23',
    },
};

// Create context
export const GlobalContext = createContext<Context>({
    state: initialState,
    dispatch: () => undefined,
});

// Provider component
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
