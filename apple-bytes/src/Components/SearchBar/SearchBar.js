import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles, filterArticles, clearFilter }) => {
    const [input, setInput] = useState("");

    const handleChange = (searchTerm) => {
        setInput(searchTerm);
        if (!input) {
            clearFilter();
        }
    }

    const handleSearch = (search) => {
        if (!input) {
            alert('Please provide search term');
        } else {
            filterArticles(search);
        }
    }

    // useEffect(() => {
    //     handleSearch();
    // }, [input, articles]);

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            value={input}
            placeholder="Search articles"
            onChange={(event) => handleChange(event.target.value)}
            className="search-field"
        />
        <button className="search-btn" onClick={() => handleSearch(input)}>Search</button>
      </div>
    )
}
  
  export default SearchBar;