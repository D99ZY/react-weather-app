import './Location.css';

interface LocationProps {
    city: string;
    country: string;
}

const Location = ({ city, country }: LocationProps) => {
    return (
        <div className='location'>
            <h2>
                {city}, {country}
            </h2>
            <h4>14:32 13/12/2021</h4>
        </div>
    );
};

export default Location;
