import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
//import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount(){
    BooksAPI.getAll().then(data => this.setState({books: data}));
    console.log(this.state.books)
  }
  render() {
    return (
      <div className="App">
        <Route path = "/" render= {()=><ListBooks books={this.state.books}/>}/>
      </div>
    );
  }
}

export default BooksApp;