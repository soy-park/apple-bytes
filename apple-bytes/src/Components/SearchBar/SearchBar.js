import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    useEffect = (() => {
        if (!input) {
            setArticles(articles);
        }
    }, [input, articles]);

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setInput(searchTerm);
    }

    const handleSearch = () => {
        const filteredArticles = articles.filter(article => (article.title.toLowerCase().includes(input.toLowerCase()) || article.description.toLowerCase().includes(input.toLowerCase()) || article.publishedAt.split('T')[0].toLowerCase().includes(input.toLowerCase())))
        setArticles(filteredArticles);
    }

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            value={input}
            onChange={(event) => handleChange(event)}
            className="search-field"
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;