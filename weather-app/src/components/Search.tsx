import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    // State
    const [text, setText] = useState<string>('');

    // Update weather in global state
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Text', text);
    }

    return (
        <div className='search'>
            <form onSubmit={onSubmitHandler}>
                <input 
                    type='text'
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    placeholder='Enter a new city'
                />
                <button>&gt;</button>
            </form>
        </div>
    );
};

export default Search;
