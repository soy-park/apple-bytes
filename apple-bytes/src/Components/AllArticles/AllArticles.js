import React from 'react';
import '../AllArticles/AllArticles.css';
import SearchBar from '../SearchBar/SearchBar';
import ArticleBox from '../ArticleBox/ArticleBox';

const AllArticles = ({ articles, setArticles, filterArticles, clearFilter }) => {
    const articleBoxes = articles.map(article => {
        return (
            <ArticleBox
                key={article.url}
                image={article.urlToImage}
                headline={article.title}
                date={article.publishedAt.split('T')[0]}
                description={article.description}
                content={article.content}
                source={article.source.name}
            />
        ) 
    })    

    return (
        <main className="all-articles-page">
            {/* <SearchBar articles={articles} setArticles={setArticles} filterArticles={filterArticles} clearFilter={clearFilter} /> */}
            <section className="articles-container">
                {articleBoxes}
            </section>
        </main>
    );
}
  
  export default AllArticles;