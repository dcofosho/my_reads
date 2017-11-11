import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

class BookShelf extends React.Component{
	state ={
		query: '',
		books: []
	}

	componentDidMount(){
		BooksAPI.getAll().then(data => this.setState({books: data}));
		console.log(this.state.books)
	}
	getBooksOnShelf(){
	    BooksAPI.getAll().then(data=>{
	      this.setState({books:data})
	    });
	  }
	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	handleChangeShelf = (book:any, shelf:string) => {
		BooksAPI.update(book, shelf).then(response=>{
			this.getBooksOnShelf();
		});
		this.render();
	}

	updateBook(book, shelf) {
	    let temp = this.state.books;
	    const bookToUpdate = temp.filter(t => t.id === book.id)[0];
	    bookToUpdate.shelf = shelf;
	    this.setState({
	      books: temp
	    });
	    this.props.onChangeShelf(book, shelf);
	}

	render(){
		return(
			<div className="bookshelf">
				<div className="bookshelf-title">{this.props.shelftitle}</div>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map(book =>
							<li key={book.id} className="book">
								<div className="book-top">
									<div className="book-cover"
										style={{
											width: 130,
											height: 190,
											backgroundImage: "url("+book.imageLinks.thumbnail+")"
                    					}}
									>
									</div>
									<div className="book-shelf-changer">
					                  <select
					                    value={book.shelf}
					                    onChange={e => {
					                    this.updateBook(book, e.target.value);
					                    }}>
					                      <option value="none" disabled>
					                        Select a shelf:
					                      </option>
					                      <option value="currentlyReading">Currently Reading</option>
					                      <option value="wantToRead">Want to Read</option>
					                      <option value="read">Read</option>
					                      <option value="none">None</option>
					                  </select>
					                </div>
								</div>
								<div className="book-title">{book.title}</div>
								<div className="book-authors">
									{book.authors[0]}
								</div>
							</li>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;