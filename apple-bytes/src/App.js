import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import { getArticles } from './fetchAPI';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [articles, setArticles] = useState([]);

  

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles setCurrentPage={setCurrentPage} />}
      {currentPage === 'article' && <SingleArticle setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
