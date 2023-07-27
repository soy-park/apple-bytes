import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    const handleChange = (search) => {
        if (!input) {
            setArticles(articles);
        }
        setInput(search);
    }

    const handleSearch = () => {
        if (!input) {
            setArticles(articles);
        } else {
       
            setArticles(filteredArticles);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [input, articles]);

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
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;