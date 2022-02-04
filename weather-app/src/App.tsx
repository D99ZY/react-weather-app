import Location from './components/Location';
import Weather from './components/Weather';
import Search from './components/Search';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
    return (
        <GlobalProvider>
            <div className="app">
                <div className="app--container">
                    <Location />
                    <Weather />
                    <Search />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
