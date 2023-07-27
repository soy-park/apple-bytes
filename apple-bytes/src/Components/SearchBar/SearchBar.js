import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setArticles, articles, filterArticles, clearFilter }) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
        // if (!searchTerm) {
        //     clearFilter();
        // }
    }

    const handleSearch = (searchTerm) => {
        setSearch(searchTerm)
        if (!search) {
            setArticles(articles);
            alert('Please provide a search term');
        } else {
            // filterArticles(search);
            const filteredArticles = articles.filter(article => (
                article.title.toLowerCase().includes(search.toLowerCase()) ||
                article.description.toLowerCase().includes(search.toLowerCase()) ||
                article.publishedAt.split('T')[0].toLowerCase().includes(search.toLowerCase())
            ));
            setArticles(filteredArticles);
        }
    }

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            value={search}
            placeholder="Search articles"
            onChange={handleChange}
            className="search-field"
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
}
  
  export default SearchBar;