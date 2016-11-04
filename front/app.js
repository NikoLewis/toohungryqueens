import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'



var NewPostForm = React.createClass({
  getInitialState: function() {
    return({title: "", author: ' ', imageURL:' ', body: '', data: null})
  },
  handleChange: function(e) {
    this.setState({title: e.target.value})
  },
  handleBodyChange: function(e) {
    this.setState({body: e.target.value})
  },
  handleImgChange: function(e){
    this.setState({imageURL: e.target.value})

  },
  componentWillMount: function(){
    this.refresh()
  },
  refresh: function() {
    $.ajax({
      url: '/posts',
      type: 'GET',
      success: data => {
        this.setState({
          data: data
        })
      }
    })
  },
  makeNewPost: function(e) {
    console.log('submit');
    e.preventDefault()
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: {
        title: this.state.title,
        author: 'Niko',
        imageURL: this.state.imageURL,
        body: this.state.body
      }
    })
  },//
  render: function() {
    return(
      <div>
       
        <form
          onSubmit={this.makeNewPost}>
          <input
            type="text"
            placeholder="Post Title"
            onChange={this.handleChange}
            value={this.state.input}></input>
          <input type="submit"></input>
          <input id='images' placeholder='image url' onChange={this.handleImgChange}></input>
          <textarea onChange={this.handleBodyChange}></textarea>
          
        </form>
        <button onClick={this.refresh}>Refresh data</button>

        <ul>
        {this.state.data ? this.state.data.map(row => (
          <li key={row.key}><h2>{row.title}</h2><img src={row.imageURL} /><h5>written by: {row.author}</h5><h3>{row.text}</h3></li>
        )) : null}
        </ul>
       
      </div>
    )
  }
})

ReactDOM.render(
  <NewPostForm/>,
  document.getElementById('root')
)