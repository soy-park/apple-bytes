import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import { getArticles } from './fetchAPI';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [articles, setArticles] = useState([]);

  getArticles()
  .then(data => setArticles(data.articles))
  .catch(error => {throw new Error(error)})

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles setCurrentPage={setCurrentPage} articles={articles} />}
      {currentPage === 'article' && <SingleArticle setCurrentPage={setCurrentPage} articles={articles} />}
    </div>
  );
}

export default App;
