import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { GlobalState, Context } from './types';

const initialState: GlobalState = {
    weather: { city: 'London', country: 'GB', temperature: 14, conditions: 'Stormy' },
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
