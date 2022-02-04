import { GlobalState, Action } from "./types";

const AppReducer = (state: GlobalState, action: Action): GlobalState => {
    switch(action.type) {
        case 'UPDATE_WEATHER':
            return {
                ...state,
                weather: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
