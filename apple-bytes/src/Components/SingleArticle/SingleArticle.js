import React from 'react';
import '../SingleArticle/SingleArticle.css';
import { useHistory } from 'react-router-dom';

const SingleArticle = ({ chosenTitle, articles }) => {
    const chosenArticle = articles.find(article => article.title.includes(chosenTitle));
    const history = useHistory(); 

    const returnToArticles = () => {
        history.push('/');
    }

    return (
        <main className="detailed-article-view">
            <div className="button-container">
                <button className="articles-button" onClick={returnToArticles}>All Articles</button>
            </div>
            <h2 className="headline">{chosenArticle.title}</h2>
            <div className="img-container">
                <img src={chosenArticle.urlToImage} alt="Article image" className="article-img"/>
            </div>
            <p className="date">{chosenArticle.publishedAt.split('T')[0]}</p>
            <h5 className="content">{chosenArticle.content}</h5>
            <h5 className='more-content'>For more content, visit <a href={chosenArticle.url}>{chosenArticle.url}</a></h5>
            <p className="source">{chosenArticle.source.name}</p>
        </main>
    )
}

export default SingleArticle;