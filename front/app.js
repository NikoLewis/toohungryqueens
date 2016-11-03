import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'



var NewPostForm = React.createClass({
  getInitialState: function() {
    return({title: "", body: '', data: null})
  },
  handleChange: function(e) {
    this.setState({title: e.target.value})
  },
  handleBodyChange: function(e) {
    this.setState({body: e.target.value})
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
      data: {title: this.state.title, body: this.state.body}
    })
  },
  render: function() {
    return(
      <div>
       <img src="/images/queensmap.jpg" className="map" />
        <form
          onSubmit={this.makeNewPost}>
          <input
            type="text"
            placeholder="Post Title"
            onChange={this.handleChange}
            value={this.state.input}></input>
          <input type="submit"></input>
          <textarea onChange={this.handleBodyChange}></textarea>
          
        </form>
        <button onClick={this.refresh}>Refresh data</button>
        <ul>
        {this.state.data ? this.state.data.map(row => (
          <li key={row.key}><h2>{row.title}</h2><h5>{row.author}</h5><h3>{row.text}</h3></li>
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