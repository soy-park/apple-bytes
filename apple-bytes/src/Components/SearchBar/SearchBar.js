import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
        if (!event.target.value) {
            setArticles(articles);
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (!input) {
            return alert("Please provide a search term")
        }  
        
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
            onChange={handleChange}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;