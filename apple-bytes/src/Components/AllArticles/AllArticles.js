import React from 'react';
import '../AllArticles/AllArticles.css';
import SearchBar from '../SearchBar/SearchBar';

const AllArticles = ({ articles, setArticles }) => {
    const articleBoxes = articles.map(article => {
        return (
            <ArticleBox
                key={Date.now()}
                image={article.urlToImage}
                headline={article.title}
                date={article.publishedAt.split('T')[0]}
                description={article.description}
                content={article.content}
                source={article.source.name}
                url={article.url}
            />
        ) 
    })    

    return (
        <main className="all-articles-page">
            <SearchBar articles={articles} setArticles={setArticles} />
            {articleBoxes}
        </main>
    );
}
  
  export default AllArticles;