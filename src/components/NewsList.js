import React from 'react';

const NewsList = (props) => {
  const options = props.news.map((news, index) => {
    return <option value={index} key={index}>{news.title}</option>
  })

  function handleChange(event){
    console.log(event.target.value);
    props.onNewsSelected(event.target.value)
  }
  return(
    <select id="news-list" defaultValue="default" onChange= {handleChange}>
      <option disabled value="default">Choose news item...</option>
      {options}
    </select>
  )
}

export default NewsList;
