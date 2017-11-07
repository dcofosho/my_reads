import React from "react";
import "./App.css";

class BookShelf extends React.Component{
	state={}
	render(){
		return(
			<div className="bookshelf">
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map(book =>
							<li key={book.id} className="book">
								<div className="book-top">
									<div className="book-cover"
										style={{
											width: 130,
											height: 190,
											backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    					}}
									>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
							</li>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;