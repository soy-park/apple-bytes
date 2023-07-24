import React from 'react';
import '../SingleArticle/SingleArticle.css';

const SingleArticle = ({ chosenTitle, articles }) => {
    const chosenArticle = articles.find(article => article.title.replace(/"/g, '') === chosenTitle.replace(/"/g, ''));

    const handleClick = () => {
        console.log("hi")
    }

    return (
        <main className="detailed-article-view">
            <div className="article-button-container">
                <button className="Articles-button" onClick={handleClick}>All Articles</button>
            </div>
            <h2 className="headline">{chosenArticle.title}</h2>
            <div className="img-container">
                <img src={chosenArticle.urlToImage} alt="Article image"/>
            </div>
            <p className="date">{chosenArticle.publishedAt.split('T')[0]}</p>
            <h5 className="content">{chosenArticle.content}</h5>
            <p className="source">{chosenArticle.source.name}</p>
        </main>
    )
}

export default SingleArticle;