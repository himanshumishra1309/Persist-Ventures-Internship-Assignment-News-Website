import React from 'react';
import './newscard.css'; // Ensure Tailwind is configured properly

function Newscard({ title, description, src, url }) {
    return (
        <div className="newscard">
            <div className="newscard-image-container">
                <img
                    src={src ? src : "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"}
                    alt="news"
                    className="newscard-image"
                />
            </div>
            <div className="newscard-content">
                <h5 className="newscard-title font-bold">{title}</h5>
                <p className="newscard-description">{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <button className="newscard-button">Read More</button>
                </a>
            </div>
        </div>
    );
}

export default Newscard;
