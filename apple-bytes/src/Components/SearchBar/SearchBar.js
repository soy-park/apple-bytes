import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    useEffect = (() => {
        handleSearch();
        handleChange();
    }, [input]);

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setInput(searchTerm);
    }

    const handleSearch = () => {
        if (!input) {
            setArticles(articles);
        } else {
            const filteredArticles = articles.filter(article => (article.title.toLowerCase().includes(input.toLowerCase()) || article.description.toLowerCase().includes(input.toLowerCase()) || article.publishedAt.split('T')[0].toLowerCase().includes(input.toLowerCase())))
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
            onChange={(event) => handleChange(event)}
            className="search-field"
        />
        {input && <button className="search-btn" onClick={handleSearch}>Search</button>}
        {!input && <button className="all-articles-btn" onClick={handleSearch}>Articles</button>}
      </div>
    )
}
  
  export default SearchBar;