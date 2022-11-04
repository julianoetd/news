import React from "react";
import './newsItem.css'

const NewsItem = ({ title, description, url, urlToImage}) => {
   
    return(
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <a className="btn-url" href={url}>Read More</a>
            </div>
            
        </div>
    )

}

export default NewsItem

// 07c8cf4ec0a041dc88180c72b58e8c9e