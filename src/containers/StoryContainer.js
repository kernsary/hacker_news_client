import React from 'react'

class StoryContainer extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    storyIDs: [],
    stories: []
  }
}

componentDidMount(){
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
  fetch(url)
  .then(res => res.json())
  .then(idList => this.setState({ storyIDs: idList}))
  .catch(err => console.error);
}

render(){
  return(
    <h1>Hello!</h1>
  )
}

}

export default StoryContainer