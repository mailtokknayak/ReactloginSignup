
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import image from '../../public/images/logo.jpeg'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.searchBooks = this.searchBooks.bind(this);
  }

  searchBooks() {
    console.log("testing", document.getElementById("searchText").value)
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home"><img src={image} height="50px" width="50px" /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home"><h1>Axis Bank Book Inventory</h1></Nav.Link>
        </Nav>
        <Form inline  >
          <FormControl id="searchText" type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" onClick={this.searchBooks}>Search</Button>
        </Form>
      </Navbar>
    )
  }
}


export default Header;