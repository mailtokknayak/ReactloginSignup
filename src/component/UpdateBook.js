import React from 'react';
import image from '../../public/images/logo.jpeg'
import { Figure, Row, Col, Container , InputGroup , FormControl ,ButtonToolbar ,Button} from 'react-bootstrap'


class UpdateBook extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var divStyle = {
            "margin-top": '50px',
 
      
          };
        console.log("in update ", this.props.selectedBook)
        return (
            <div style={divStyle}> 
                <Container>
               
                    <Row >
                        <Col> <Figure>
                            <Figure.Image
                                width={250}
                                height={250}
                                alt="171x180"
                                src={this.props.selectedBook.volumeInfo.imageLinks != null && this.props.selectedBook.volumeInfo.imageLinks.thumbnail}
                            />
                            <Figure.Caption>
                            {this.props.selectedBook.volumeInfo.description}
                            </Figure.Caption>
                        </Figure>
                        </Col>
                        <Col>
                        <p> {this.props.selectedBook.volumeInfo.title}</p>
                        <p> {this.props.selectedBook.volumeInfo.authors != null && this.props.selectedBook.volumeInfo.authors[0]}</p>
                        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Price
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" /> {this.props.selectedBook.price}
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
       Quantity
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />{this.props.selectedBook.quantity}
  </InputGroup>

  <ButtonToolbar>
 
  <Button variant="success">Update Book</Button>

</ButtonToolbar>
                        </Col>
                    </Row>
                </Container>





            </div>
        )
    }
}

export default UpdateBook;