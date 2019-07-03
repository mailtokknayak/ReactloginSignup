import React, { Component } from 'react';
import Header from './Header'
import Book from './Book'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [], id: 1
    };
  }


  componentWillMount() {
    axios.get('http://localhost:8080/book/gBooks/Game')
      .then((response) => {
        this.setState({ bookList: response.data })
      })
  }
  render() {


    let r = Object.keys(this.state.bookList).length > 0 && this.state.bookList.items.map(function (book) {
      return (
        <Book book={book} />
      )

    });



    return (
      <div>
        <Header />
        <Container>

          <Row>
            {r}
          </Row>
        </Container>
      </div>


    );
  }
}

export default App;
