import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        if (!event.target.value) {
            return setInput("");
            // setArticles(articles);
        } else {
            return setInput(event.target.value);
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (!input) {
            return alert("Please provide a search term")
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
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;