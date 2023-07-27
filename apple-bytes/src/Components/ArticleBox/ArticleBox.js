import React from 'react';
import '../ArticleBox/ArticleBox.css';
import { NavLink } from 'react-router-dom';

const ArticleBox = ({ image, headline, date, description, content, source }) => {
    const encodedHeadline = encodeURIComponent(headline);

    return (
        <article>
            <NavLink to={`/${encodedHeadline}`} className="link-to-single-article">
                <img src={image} alt="Article image" className="article-image"/>
            </NavLink>
            <h3 className="all-headline">{headline}</h3>
            <p className="all-dates">{date}</p>
            <p className="description">{description}</p>
        </article>
    )
}

export default ArticleBox;