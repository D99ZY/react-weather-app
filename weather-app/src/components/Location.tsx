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
        </div>
    );
};

export default Location;
