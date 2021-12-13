import './Weather.css';

interface WeatherProps {
    temperature: number;
    conditions: string;
}

const Weather = ({ temperature, conditions }: WeatherProps) => {
    return (
        <div className='weather'>
            <h1>
                {temperature}&deg;C
            </h1>
            <h3>
                {conditions}
            </h3>
        </div>
    );
};

export default Weather;
