import React, { useState, useEffect } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ articles, setFilteredArticles }) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearch = () => {
        if (!search) {
            alert('Please provide a search term');
        } else {
            const filtered = articles.filter(article => (
                article.title.toLowerCase().includes(search.toLowerCase()) ||
                article.description.toLowerCase().includes(search.toLowerCase()) ||
                article.publishedAt.split('T')[0].toLowerCase().includes(search.toLowerCase())
            ));
            setFilteredArticles(filtered);
        }
    }

    const goToAllArticles = () => {
        setSearch('');
        setFilteredArticles([]);
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
        <div className="buttons-container">
            <button className="search-btn" onClick={handleSearch}>Search</button>
            <button className="articles-btn" onClick={goToAllArticles}>All Articles</button>
        </div>
      </div>
    )
}
  
  export default SearchBar;