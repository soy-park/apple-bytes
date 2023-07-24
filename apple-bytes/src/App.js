import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles currentPage={currentPage} />}
      {currentPage === 'article' && <SingleArticle currentPage={currentPage} />}
    </div>
  );
}

export default App;
