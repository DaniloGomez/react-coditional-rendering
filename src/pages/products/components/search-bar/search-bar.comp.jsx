import React from 'react';
import './search-bar.style.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-input">
                <a><b>Search Student: </b></a>
            <input type="text" name="search" placeholder="Search student..."/>                
            </div>
        </div>
    );
}
export default SearchBar;