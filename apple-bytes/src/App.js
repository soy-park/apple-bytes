import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import { getArticles } from './fetchAPI';
import AllArticles from './Components/AllArticles/AllArticles';
import { Route, Switch } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle/SingleArticle';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.articles))
      .catch(error => {throw new Error(error)})
  })

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <AllArticles articles={articles} setArticles={setArticles} />}/>
        <Route path='/:title' render={({match}) => {
          const chosenTitle = match.params.title;
          return <SingleArticle chosenTitle={chosenTitle} articles={articles} />
        }}/>
      </Switch>
    </div>
  );
}

export default App;
