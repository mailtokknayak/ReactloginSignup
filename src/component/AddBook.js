import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import Book from './Book'

class AddBook extends React.Component {

    constructor(props) {
        super(props)
        this.state = { googleBookList: [] }
        this.findBookFromGAPI = this.findBookFromGAPI.bind(this)
        this.addBook = this.addBook.bind(this)
    }

    findBookFromGAPI() {
        let input = document.getElementById("searchTextGBook").value
        axios.get('http://localhost:8080/book/gBooks/' + input)
            .then((response) => {
                this.setState({ googleBookList: response.data[0].items })
            })


    }

    addBook(book) {
        this.props.addBook(book)
    }

    render() {
        var that = this
        var divStyle = {
            "marginLeft": '19%',
            "width": "950px"
        };
        var divStyleForList = {
            "marginTop": '50px'

        };
        
        let books = this.state.googleBookList.length > 0 && this.state.googleBookList.map((book) => {

            return (
                <Col sm={4}>
                    <div style={divStyleForList}>
                        <Book book={book.volumeInfo} updateBook={that.updateBook} addBook={that.addBook} navigator='add' />
                    </div>
                </Col>
            )

        });

        return (
            <div style={divStyleForList}>
                <Form inline  >
                    <FormControl style={divStyle} id="searchTextGBook" type="text" placeholder="Search Books From Google Book Store" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={this.findBookFromGAPI}>Search</Button>
                </Form>

                <Container style={divStyleForList}>
                    <Row>
                        {books}
                    </Row>
                </Container>
            </div>


        )
    }
}

export default AddBook