import React from 'react';
import { Container, Row, Col, Media, Button, ButtonToolbar } from 'react-bootstrap'
import img from './book.jpeg'
import axios from 'axios';


class Book extends React.Component {
  constructor(props) {
    super(props)
    this.updateBook = this.updateBook.bind(this)
    this.addBook = this.addBook.bind(this)

  }

  updateBook() {
    this.props.updateBook(this.props.book)
  }

  addBook() {

    let selectedBook = {}
    selectedBook.id = this.props.book.volumeInfo.id
    selectedBook.title = this.props.book.volumeInfo.title
    selectedBook.authors = this.props.book.volumeInfo.authors
    selectedBook.price = this.props.book.volumeInfo.price
    selectedBook.description = this.props.book.volumeInfo.id
    selectedBook.quantity = this.props.book.volumeInfo.quantity
    selectedBook.imageLinks = this.props.book.volumeInfo.imageLinks
  

    axios.post('http://localhost:8080/book/createBook', selectedBook)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Media>
        <img
          width={200}
          height={200}
          className="mr-3"
          src={this.props.book.volumeInfo.imageLinks != null && this.props.book.volumeInfo.imageLinks.thumbnail}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>{this.props.book.volumeInfo.title}</h5>
          <p>
            {this.props.book.volumeInfo.authors != null && this.props.book.volumeInfo.authors[0]}
          </p>
          <p>{this.props.book.volumeInfo.price}</p>
          <p>{this.props.book.volumeInfo.quantity}</p>
          <p>{this.props.book.volumeInfo.description}</p>
          <Button variant="outline-primary" onClick={this.updateBook}>Edit</Button>
          &nbsp;  &nbsp;  &nbsp;
          <Button variant="outline-danger">Delete</Button>
          &nbsp;  &nbsp;  &nbsp;
          <Button variant="success" onClick = {this.addBook}>Add</Button>
        </Media.Body>
      </Media>
    )
  }
}

export default Book;