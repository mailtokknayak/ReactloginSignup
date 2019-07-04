import React from 'react';
import image from './book.jpeg'
import { Figure, Row, Col, Container, InputGroup, FormControl, ButtonToolbar, Button ,Jumbotron,Badge} from 'react-bootstrap'
import axios from 'axios';

class UpdateBook extends React.Component {
  constructor(props) {
    super(props)
    this.updateBookDetails = this.updateBookDetails.bind(this)
    this.state = { selectedBook: this.props.selectedBook }
   
  }

  updateBookDetails() {
    var selectedBook = {}
    selectedBook.id =   this.state.selectedBook.id
    selectedBook.title = this.state.selectedBook.title
    selectedBook.authors = this.state.selectedBook.authors
    selectedBook.price = this.price.value
    selectedBook.description = this.state.selectedBook.description
    selectedBook.quantity = this.quantity.value
    selectedBook.imageLinks = this.state.selectedBook.imageLinks

    if(this.state.selectedBook.id !=null){
      axios.put('http://localhost:8080/book/updateBook/'+this.state.selectedBook.id, selectedBook)
      .then(function (response) {
        alert("Book Details Updated SuccessFully!")
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      axios.post('http://localhost:8080/book/createBook', selectedBook)
      .then(function (response) {
        alert("Book Added to Your Repository!")
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
   

  }

  render() {
    var divStyle = {
      "margin-top": '50px'
    };

    return (
      <div style={divStyle}>
        {this.props.navigator == 'edit' ?
                 <h1>
                  <Badge variant="secondary">Edit Book </Badge>
               </h1> :
                  <h1>
                  <Badge variant="secondary">Add Book</Badge>
               </h1> 
                }
        <Container>

          <Row >
            <Col> <Figure>
              <Figure.Image
                width={250}
                height={250}
                
                src={this.state.selectedBook.imageLinks != null ? this.state.selectedBook.imageLinks.thumbnail : image}
              />
              <Figure.Caption>
                {this.state.selectedBook.description}
              </Figure.Caption>
            </Figure>
            </Col>
            <Col>
            <Jumbotron fluid>
  <Container>
  <h2> {this.state.selectedBook.title}</h2>
              <h3> {this.state.selectedBook.authors != null && this.state.selectedBook.authors[0]}</h3>
  </Container>
</Jumbotron>
             
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="price">
                    Price
      </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" type="number"  ref={(value) => this.price = value} /> {this.state.selectedBook.price}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="quantity">
                    Quantity
      </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" type="number"  ref={(value) => this.quantity = value}/>{this.state.selectedBook.quantity}
              </InputGroup>


              <ButtonToolbar>
                {this.props.navigator == 'edit' ?
                  <Button variant="success" onClick={this.updateBookDetails}>Update Book</Button> :
                  <Button variant="success" onClick={this.updateBookDetails}>Add Book</Button>
                }
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>





      </div>
    )
  }
}

export default UpdateBook;