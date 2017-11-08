import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends React.Component{
	
	state ={
		query: '',
		books: []
	}

  componentDidMount(){
      BooksAPI.getAll().then(data => this.setState({books: data}));
      console.log(this.state.books)
  }

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}
	render(){
    let showingBooks
    if (this.state.query){
      //escape special characters, 'i' means disregard case
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.state.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.state.books
    }
		return(
			<div className="search-books">Search Books
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
						type="text"
						placeholder="Search books"
						value={this.state.query}
						onChange={event => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>

        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book =>
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    }}
                  />
                </div>
                <div className="book-title">
                  {book.title}
                </div>
                {book.authors &&
                  <div className="book-authors">
                    {book.authors[0]}
                  </div>}
              </li>
            )}
          </ol>
        </div>
			</div>
		)
	}
}

export default SearchBooks