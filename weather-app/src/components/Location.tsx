import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Location.css';

const Location = () => {

    // Context
    const {
        state: { weather }
    } = useContext(GlobalContext)

    return (
        <div className='location'>
            <h2>
                {weather.city}, {weather.country}
            </h2>
            <h4>14:32 13/12/2021</h4>
        </div>
    );
};

export default Location;
