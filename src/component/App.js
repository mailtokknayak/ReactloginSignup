import React, { Component } from 'react';
import Header from './Header'
import Book from './Book'
import { Container, Row, Button, ButtonToolbar, Col } from 'react-bootstrap'
import axios from 'axios';
import UpdateBook from './BookUpdate';
import AddBook from './AddBook'

class App extends Component {
  constructor(props) {
    super(props);
    this.updateBook = this.updateBook.bind(this)
    this.searchGBook = this.searchGBook.bind(this)
    this.searchBooks = this.searchBooks.bind(this)
    this.addBook = this.addBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)

    this.state = {
      bookList: [], toggle: 'home', selectedBook: {}
    };
  }


  updateBook(book) {
    this.setState({ selectedBook: book, toggle: 'edit' })
  }

  addBook(book) {

    this.setState({ selectedBook: book, toggle: 'addBook' })
  }

  searchGBook(book) {
    this.setState({ toggle: 'searchGBook' })
  }

  searchBooks(input) {
    axios.get('http://localhost:8080/v1/book/findByTitle/' + input)
      .then((response) => {

        this.setState({ bookList: response.data })
      })

  }

  deleteBook(input) {
    axios.delete("http://localhost:8080/v1/book/deleteBook/" + input)
      .then((response) => {
        this.setState({ toggle: 'Delete' })
      })

  }

  componentWillMount() {
    axios.get('http://localhost:8080/v1/book/allBooks')
      .then((response) => {
        this.setState({ bookList: response.data })
      })
  }


  render() {
    var that = this
    var divStyle = {
      "marginLeft": '80%',
      "margin-top": '10px'
    };

    var divStyleForList = {
      "margin-top": '20px'

    };

    let books = this.state.bookList.length > 0 && this.state.bookList.map((book) => {

      return (
        <Col sm={4}>
          <div style={divStyleForList}>
            <Book book={book} updateBook={that.updateBook} addBook={this.addBook} deleteBook={this.deleteBook} navigator='edit' />
          </div>
        </Col>
      )

    });

    switch (this.state.toggle) {
      case 'home':
        return (
          <div id = "mainDiv">
            <Header searchBooks={this.searchBooks} />
            <div style={divStyle}>
              <ButtonToolbar>
                <Button variant="outline-success" onClick={this.searchGBook} >
                  Add Book From Google Books
                </Button>
              </ButtonToolbar>
            </div>
            <Container style={divStyleForList}>

              <Row >
                {books}
              </Row>
            </Container>
          </div>
        )
        break;
      case 'edit':
        return (
          <div>
            <Header searchBooks={this.searchBooks} />
            <UpdateBook selectedBook={this.state.selectedBook} navigator='edit' />
          </div>
        )
        break;
      case 'searchGBook':
        return (
          <div>
            <Header searchBooks={this.searchBooks} />
            <AddBook addBook={this.addBook} />
          </div>
        )
        break;
      case 'addBook':
        return (
          <div>
            <Header searchBooks={this.searchBooks} />
            <UpdateBook selectedBook={this.state.selectedBook} navigator='add' />
          </div>
        )
        break;
      case 'Delete':
        window.location.reload()
        break;

    }


  }
}

export default App;
