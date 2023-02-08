import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
        document.title = `${this.capitalizeFunction(this.props.category)} | Newsly`;
    }

    capitalizeFunction(value){
      const finalString = value.charAt(0).toUpperCase() + value.slice(1);
      return finalString;
    }

    async updatedNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      });
    }

    async componentDidMount(){
      this.updatedNews();
    }
    fetchMoreData = async() => {
      this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53ba08424a8148c49de4f2d452d4dc8b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles), 
        totalResults: parsedData.totalResults
      });
    }


  render() {
    return (  
      <>
        <h2 className='text-center my-3'>News - Top {this.capitalizeFunction(this.props.category)} Headlines</h2>
        <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
          <div className="container">
            <div className="row my-3">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url} >
                    <NewsItem color={this.props.color} title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "../images/defaultImage.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt.split("T")[0]} source={element.source.name}/>
                </div>
                })}
            </div> 
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
