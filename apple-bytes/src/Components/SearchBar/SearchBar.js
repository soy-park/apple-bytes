import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState("");

    return (
      <div className="searchbar-container">
        <input 
            type="text"
            id="article"
            name="article"
            

        />
      </div>
    );
  }
  
  export default SearchBar;