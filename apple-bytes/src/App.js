import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles setCurrentPage={setCurrentPage} />}
      {currentPage === 'article' && <SingleArticle setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
