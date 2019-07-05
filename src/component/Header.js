
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, ButtonToolbar } from 'react-bootstrap'
import image from '../../public/images/logoApp.jpg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showAllBook } from '../action/ShowAllBooks';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.searchBooks = this.searchBooks.bind(this);
  }

  searchBooks() {
    this.props.searchBooks(this.searchBookText.value)
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/"><img src={image} height="100px" width="100px" /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home"><h1>Inventory Leader</h1></Nav.Link>
          </Nav>
          <Form inline  >
            <FormControl id="searchText" type="text" placeholder="Search" className="mr-sm-2" ref = {(input) => this.searchBookText = input} />
            <Button variant="outline-info" onClick={this.searchBooks}>Search</Button>
          </Form>
        </Navbar>


      </div>
    )
  }
}


// function mapStateToProps(state , props){
//   return{
//     input: state.input
//   }
// }

// function mapDispatchToProps(dispatch){
//  return{
//    action: bindActionCreators(showAllBook , dispatch)
//  }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header