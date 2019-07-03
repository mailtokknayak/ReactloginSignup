import React, { Component } from 'react';
import Header from './Header'
import Book from './Book'
import { Container, Row, Button, ButtonToolbar } from 'react-bootstrap'
import axios from 'axios';
import UpdateBook from './UpdateBook';
import AddBook from './AddBook'

class App extends Component {
  constructor(props) {
    super(props);
    this.updateBook = this.updateBook.bind(this)
    this.addBook = this.addBook.bind(this)

    this.state = {
      bookList: [], toggle: 'home', selectedBook: {}
    };
  }


  updateBook(book) {
    this.setState({ selectedBook: book, toggle: 'edit' })
  }

  addBook() {
    this.setState({ toggle: 'add' })
  }

  componentWillMount() {
    axios.get('http://localhost:8080/book/allBooks')
      .then((response) => {
        this.setState({ bookList: response.data })
      })
  }
  render() {
    var that = this
    var divStyle = {
      "margin-left": '80%',
    };

    var divStyleForList = {
      "margin-top": '50px'

    };
    // let r = Object.keys(this.state.bookList).length > 0 && this.state.bookList.items.map(function (book) {
    //   return (
    //     <Book book={book} />
    //   )

    // });

    let r = this.state.bookList.length > 0 && this.state.bookList.map(function (bookArray) {

      return bookArray.items.map((book) => {
        return (
          <div style={divStyleForList}>
            <Book book={book} updateBook={that.updateBook} />
          </div>

        )
      })


    });

    switch (this.state.toggle) {
      case 'home':
        return (
          <div>
            <Header />
            <div style={divStyle}>
              <ButtonToolbar>
                <Button variant="outline-success" onClick={this.addBook} >
                  Add Book From Google Books
                </Button>
              </ButtonToolbar>
            </div>
            <Container style={divStyleForList}>

              <Row >
                {r}
              </Row>
            </Container>
          </div>
        )
        break;
      case 'edit':
        return (
          <div>
            <Header />
            <UpdateBook selectedBook={this.state.selectedBook} />
          </div>
        )
        break;
      case 'add':
        return (
          <div>
            <Header />
            <AddBook />
          </div>
        )
        break;

    }


  }
}

export default App;
