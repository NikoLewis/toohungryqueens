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
  handleAuthorChange:function(e){
   this.setState({author:e.target.value})
 },
  handleImgChange: function(e){
    this.setState({imageURL: e.target.value})

  },
  handleDeleteChange: function(e){
    this.setState({title: e.target.value})
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
        author: this.state.author,
        imageURL: this.state.imageURL,
        body: this.state.body
      }
    })
  },
  deletePost:function(e){
    console.log('delete');
    $.ajax({
      url:'/posts',
      type: 'DELETE',
      data: {title:this.state.title}

    })

  }
  ,
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

          <input type="text"placeholder="Author By" onChange={this.handleAuthorChange} ></input>
          <input type="submit"></input>
          <input id='images' placeholder='image url' onChange={this.handleImgChange}></input>
           <input id='delete' placeholder='post title to delete' ></input>
           <button onClick={this.handleDeleteChange} value={this.state.input}>Delete</button>
          <textarea onChange={this.handleBodyChange}></textarea>
          
        </form>
        <button onClick={this.refresh}>Refresh data</button>

        <ul id='list'>
        {this.state.data ? this.state.data.map(row => (
          <li key={row.key}><h2>{row.title}</h2><img src={row.imageURL} /><h5> {row.author}</h5><h3>{row.text}</h3></li>
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