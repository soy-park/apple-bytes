import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    useEffect = (() => {
        handleSearch()
    }, [input]);

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setInput(searchTerm);
    }

    const handleSearch = () => {
        if (!input) {
            setArticles(articles);
            return alert("Please provide a search term");
        } else {
            const filteredArticles = articles.filter(article => (article.title.toLowerCase().includes(input.toLowerCase()) || article.description.toLowerCase().includes(input.toLowerCase()) || article.publishedAt.split('T')[0].toLowerCase().includes(input.toLowerCase())))
            return setArticles(filteredArticles);
        }  
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