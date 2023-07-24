import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            value={input}
            onChange={handleChange}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    );
  }
  
  export default SearchBar;