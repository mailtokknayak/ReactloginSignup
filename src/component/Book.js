import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap'
import img from './book.jpeg'


class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Media>
        <img
          width={200}
          height={200}
          className="mr-3"
          src={this.props.book.volumeInfo.imageLinks != null && this.props.book.volumeInfo.imageLinks.thumbnail}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>{this.props.book.volumeInfo.title}</h5>
          <p>
            {this.props.book.volumeInfo.authors != null && this.props.book.volumeInfo.authors[0]}
          </p>
          <p>{this.props.book.volumeInfo.price}</p>
          <p>{this.props.book.volumeInfo.quantity}</p>
          <p>{this.props.book.volumeInfo.description}</p>
          <a href="/edit" >Edit</a>
          &nbsp;  &nbsp;  &nbsp;
    <a href="/delete">Delete</a>
        </Media.Body>
      </Media>
    )
  }
}

export default Book;