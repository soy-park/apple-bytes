import React from 'react';
import '../AllArticles/AllArticles.css';
import ArticleBox 

const AllArticles = ({ setCurrentPage, articles }) => {
    const articleBoxes = articles.map(article => {
        return (
            <ArticleBox
                key={Date.now()}
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