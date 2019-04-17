import React from 'react'
import * as api from '../api'
import Book from './Book'
import Search from './Search'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      error: ''
    }
   

    this.getBook = this.getBook.bind(this);
    this.displayBook = this.displayBook.bind(this);


  }

  componentDidMount () {
    this.getBook()
  }

  displayBook(err, response){
    let books = response.items;

    this.setState({
      error: err,
      books: books || []
    })
  }

  getBook(searchTerm){
    api.getBook(searchTerm, this.displayBook)
  }

  render(){
    
    return (
      <div>
      <h1>Books</h1>
      <Search search={this.getBook}/>
      <ul>
        {this.state.books.map((book) => {
          return <Book key={book.id} book={book}/>
          
        })}
      </ul>
      </div>

    )
  }
}

export default App
