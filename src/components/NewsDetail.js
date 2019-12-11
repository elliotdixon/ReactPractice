import React from 'react';

const NewsDetail = (props) =>{
  if(!props.news) return null;
  return(
    <div>
      <h3>
        Title: {props.news.title}
      </h3>
      <h3>
        By: {props.news.by}
      </h3>
      <a href={props.news.url} target="_blank">
          Link to full story
      </a>
      
    </div>
  )
}

export default NewsDetail;
