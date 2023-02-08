import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

      const [articles, setArticles] = useState([]);
      const [loading, setLoading] = useState(true);
      const [page, setPage] = useState(1);
      const [totalResults, setTotalResults] = useState(0);
      //document.title = `${capitalizeFunction(props.category)} | Newsly`;

    const capitalizeFunction = (value) => {
      const finalString = value.charAt(0).toUpperCase() + value.slice(1);
      return finalString;
    }

    const updatedNews = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }

    useEffect(() => {
      updatedNews();
    },[]);

    const fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=53ba08424a8148c49de4f2d452d4dc8b&page=${page + 1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    }



    return (  
      <>
        <h2 className='text-center' style={{paddingTop:"70px"}}>News - Top {capitalizeFunction(props.category)} Headlines</h2>
        <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
            >
          <div className="container">
            <div className="row my-3">
                {articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url} >
                    <NewsItem color={props.color} title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "../images/defaultImage.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt.split("T")[0]} source={element.source.name}/>
                </div>
                })}
            </div> 
          </div>
        </InfiniteScroll>
      </>
    )
}

export default News
