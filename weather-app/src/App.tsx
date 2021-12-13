import Location from './components/Location';
import Weather from './components/Weather';
import Search from './components/Search';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="app--container">
                <Location city='Durban' country='ZA' />
                <Weather temperature={27} conditions='Cloudy' />
                <Search />
            </div>
        </div>
    );
}

export default App;
