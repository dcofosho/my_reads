import React from "react";
import { Route } from "react-router-dom";
import BookShelf from './BookShelf'

class ListBooks extends React.Component{
	render(){
		return(
			<div className="list-books">
				<div className="list-books-content">
					<BookShelf
						key="currently-reading"
						books={this.props.books.filter(book=>
							book.shelf==="currentlyReading")}
						shelftitle="Currently Reading"
					 />
					 <BookShelf
						key="read"
						books={this.props.books.filter(book=>
							book.shelf==="read")}
						shelftitle="Read"
					 />
					 <BookShelf
						key="want-to-read"
						books={this.props.books.filter(book=>
							book.shelf==="wantToRead")}
						shelftitle="Want to Read"
					 />
				</div>
			</div>
		)
	}
}

export default ListBooks;