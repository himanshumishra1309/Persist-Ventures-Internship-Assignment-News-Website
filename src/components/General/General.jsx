import React, { useState, useEffect } from 'react';
import Newscard from '../Newscard/Newscard';
import Loading from '../Loading/Loading';
import './general.css';

function General() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        let url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setIsLoading(false);
                setCurrentPage(1); 
            });
    }, []);

    const handlePreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev * itemsPerPage < articles.length ? prev + 1 : prev));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedArticles = articles.slice(startIndex, startIndex + itemsPerPage);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="news-container">
                {selectedArticles.map((news, index) => (
                    <Newscard key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
                ))}
            </div>
            <div className="pagination-controls">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= articles.length}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default General;
