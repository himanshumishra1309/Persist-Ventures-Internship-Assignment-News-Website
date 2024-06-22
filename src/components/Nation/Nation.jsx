import React from 'react'
import { useState, useEffect } from 'react'
import Newscard from '../Newscard/Newscard'
import Loading from '../Loading/Loading'
import './nation.css'

function Nation() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      let url = `https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=in&apikey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
          setArticles(data.articles);
          setIsLoading(false);
        });
    },[]);

    if (isLoading) {
      return <Loading />; 
  }

  return (
    <div className="news-container">
      {articles.map((news, index)=>{
        return <Newscard key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
      })}
    </div>
  )
}

export default Nation
