import React from 'react';
import { Container, Row, Col, Media, Button, ButtonToolbar, Card, InputGroup, FormControl } from 'react-bootstrap'
import img from './book.jpeg'
import axios from 'axios';


class Book extends React.Component {
  constructor(props) {
    super(props)
    this.updateBook = this.updateBook.bind(this)
    this.addBook = this.addBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.state = { selectedBook: {}, bookDetails: {} }

  }



  updateBook() {
    this.props.updateBook(this.props.book)
  }

  addBook() {
    this.props.addBook(this.props.book)
  }

  deleteBook() {
    this.props.deleteBook(this.props.book.id)
  }

  render() {
    
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.book.imageLinks != null ? this.props.book.imageLinks.thumbnail : img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.book.authors != null && this.props.book.authors.join(',')}</Card.Subtitle>
          <Card.Title> <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="price">
                Price
      </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" readOnly value={this.props.book.price} />
          </InputGroup></Card.Title>
          <Card.Title> <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="price">
                Quantity
      </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" readOnly value={this.props.book.quantity} />
          </InputGroup></Card.Title>
          <Card.Text>
            {this.props.book.description != null && this.props.book.description.substr(0, 50)}
          </Card.Text>
          {this.props.navigator == 'edit' && <Button variant="outline-primary" onClick={this.updateBook}>Edit</Button>}
          &nbsp;  &nbsp;  &nbsp;
           {this.props.navigator == 'edit' && <Button variant="outline-danger" onClick={this.deleteBook}>Delete</Button>}
          &nbsp;  &nbsp;  &nbsp;
          {this.props.navigator == 'add' && <Button variant="success" onClick={this.addBook}>Add Book</Button>}
        </Card.Body>
      </Card>


    )
  }
}

export default Book;