import React from 'react';
import '../SingleArticle/SingleArticle.css';

const SingleArticle = ({ chosenTitle, articles }) => {
    const chosenArticle = articles.find(article => article.title.replace(/"/g, '') === chosenTitle.replace(/"/g, ''));
    
    return (
        <main className="detailed-article-view">
            <div className="article-button-container">
                <button onClick={}>All Articles</button>
            </div>
            <h2 className="headline"></h2>
        </main>
    )
}

export default SingleArticle;