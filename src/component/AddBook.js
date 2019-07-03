import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import Book from './Book'

class AddBook extends React.Component {

    constructor(props) {
        super(props)
        this.state = { googleBookList: [] }
        this.findBookFromGAPI = this.findBookFromGAPI.bind(this)
    }

    findBookFromGAPI() {
        let input = document.getElementById("searchText").value
        console.log("testing", document.getElementById("searchText"))
        axios.get('http://localhost:8080/book/gBooks/ramayan')
            .then((response) => {
                this.setState({ googleBookList: response.data })
            })
    }

    render() {
        var divStyle = {
            "margin-left": '19%',
            "width":"950px"
      
          };
          var divStyleForList = {
            "margin-top": '50px'
      
          };
        console.log("testing with input", this.state.googleBookList)
        var that = this
        let r = this.state.googleBookList.length > 0 && this.state.googleBookList.map(function (bookArray) {

            return bookArray.items.map((book) => {
                return (
                    <Book book={book} updateBook={that.updateBook} />
                )
            })


        });

        return (
            <div>
                <Form inline  >
                    <FormControl style={divStyle} id="searchText" type="text" placeholder="Search Books From Google Book Store" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={this.findBookFromGAPI}>Search</Button>
                </Form>

                <Container style={divStyleForList}>
                    <Row>
                        {r}
                    </Row>
                </Container>
            </div>


        )
    }
}

export default AddBook