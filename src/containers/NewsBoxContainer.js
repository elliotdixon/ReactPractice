import React, {Component} from 'react';
import NewsList from '../components/NewsList'

class NewsBoxContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      newsIds: [],
      news: []
    }
    this.handleNewsSelected = this.handleNewsSelected.bind(this);
  }
  componentDidMount(){
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"

    fetch(url)
    .then(res => res.json())
    .then(newsIds => {
      return newsIds.map(newsId => {
        return (`https://hacker-news.firebaseio.com/v0/item/${newsId}.json `)
      })
    })
    .then(newsUrls => this.setState({newsIds: newsUrls.slice(0, 35)}))
    .then(newData => {
      Promise.all(this.state.newsIds.map(news => {
        return fetch(news).then(res => res.json())
      }))
      .then(news => this.setState({ news: news}))
    })
    .catch(err => console.error);

  }
  handleNewsSelected(index) {
    const selectedNews = this.state.newsIds[index];
    this.setState({news: selectedNews});
  }

  render(){
    return(
      <div>
      <h2>News Items</h2>
      <NewsList
        news={this.state.news}
        onNewsSelected={this.handleNewsSelected}
        />
      </div>
    )
  }
}

export default NewsBoxContainer
