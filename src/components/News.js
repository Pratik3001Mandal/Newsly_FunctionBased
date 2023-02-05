import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=53ba08424a8148c49de4f2d452d4dc8b&page=1&pageSize=9";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false});
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handlePrevClick = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=53ba08424a8148c49de4f2d452d4dc8b&page=${this.state.page - 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      });
      window.scrollTo(0, 0);
    }
    handleNextClick = async() => {
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/9)){

      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=53ba08424a8148c49de4f2d452d4dc8b&page=${this.state.page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        });
        window.scrollTo(0, 0);
      }
    }


  render() {
    return (  
      <div className='container my-2'>
          <h2 className='text-center'>News - Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
              {this.state.articles.map((element)=>{
                  return <div className="col-md-4 my-3" key={element.url} >
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "../images/defaultImage.jpg"} newsUrl={element.url} publishedAt={element.publishedAt.split("T")[0]}/>
              </div>
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-success" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
