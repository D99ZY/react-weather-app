import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    // State
    const [text, setText] =useState<string>('');

    return (
        <div className='search'>
            <form>
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
