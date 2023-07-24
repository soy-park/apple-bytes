import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
        if (!input) {
            setArticles(articles);
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (!input) {
            return alert("Please provide a search term")
        } else {
            const filteredArticles = articles.filter(article => (article.title || article.description || article.date).toLowerCase().includes(input.toLowerCase()));
            setArticles(filteredArticles);
        }
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
    )
  }
  
  export default SearchBar;