import React from 'react';
import '../ArticleBox/ArticleBox.css';
import { NavLink } from 'react-router-dom';

const ArticleBox = ({ image, headline, date, description, content, source, url, setCurrentPage }) => {
    return (
        <NavLink to={url}>
            <img src={image} alt="Article image" className="article-image"></img>
            <h3 className="headline">{headline}</h3>
            <p className="date">{date}</p>
            <p className="description">{description}</p>
        </NavLink>
    )
}

export default ArticleBox;