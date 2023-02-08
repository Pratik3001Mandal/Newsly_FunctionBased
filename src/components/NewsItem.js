import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, publishedAt, author, source} = props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}><span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${props.color}`}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Update by {author} on {publishedAt}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
