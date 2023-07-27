import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        if (!input) {
            setArticles(articles);
        } else {
            const filteredArticles = articles.filter(article => (
                article.title.toLowerCase().includes(input.toLowerCase()) ||
                article.description.toLowerCase().includes(input.toLowerCase()) ||
                article.publishedAt.split('T')[0].toLowerCase().includes(input.toLowerCase())
            ));
            setArticles(filteredArticles);
        }
    }, [input, articles]);

    const handleChange = (search) => {
        setInput(search);
    }

    const handleSearch = () => {
        setArticles(filteredArticles);
    }

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            value={input}
            onChange={(event) => handleChange(event.target.value)}
            className="search-field"
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;