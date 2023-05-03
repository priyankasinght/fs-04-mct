import React, { useState } from 'react';
import '../index.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input
                    className='search-inp '
                    type="text"
                    placeholder="Search movies"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <a href="Home">Movies</a>
            <a href="Home">Tv Show</a>
            <a href="Home">Watch List</a>
        </div>
    );
};

export default SearchBar;
