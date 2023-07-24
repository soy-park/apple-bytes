import React from 'react';
import '../AllArticles/AllArticles.css';
import ArticleBox 
import SearchBar from '../SearchBar/SearchBar';

const AllArticles = ({ setCurrentPage, articles }) => {
    const articleBoxes = articles.map(article => {
        return (
            <ArticleBox
                key={Date.now()}
                image={article.urlToImage}
                headline={article.title}
                date={article.publishedAt.split('T')[0]}
                description={article.description}
                setCurrentPage={setCurrentPage}
            />
        ) 
    })    

    return (
        <main className="all-articles-page">
            <SearchBar />
            {articleBoxes}
        </main>
    );
}
  
  export default AllArticles;