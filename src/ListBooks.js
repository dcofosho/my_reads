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
						books={this.props.books}
						shelftitle="Currently Reading"
					 />
				</div>
			</div>
		)
	}
}

export default ListBooks;