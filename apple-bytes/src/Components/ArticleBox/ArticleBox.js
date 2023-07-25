import React from 'react';
import '../ArticleBox/ArticleBox.css';
import { NavLink } from 'react-router-dom';

const ArticleBox = ({ image, headline, date, description, content, source }) => {
    return (
        // <NavLink to={`/${headline}`}>
        //     <img src={image} alt="Article image" className="article-image"/>
        //     <h3 className="headline">{headline}</h3>
        //     <p className="date">{date}</p>
        //     <p className="description">{description}</p>
        // </NavLink>
        
        <NavLink to="/abc">
            <img className="article-image" src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
            <h3 className="headline">SAG-AFTRA is using the strike to push for more influencers and content creators to unionize</h3>
            <p className="date">2023-07-24</p>
            <p className="description">After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing contracts and sponsorship deals. It was a somewhat interest…</p>
        </NavLink>
    )
}

export default ArticleBox;