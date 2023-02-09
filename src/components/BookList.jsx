import { Component } from "react"
import {
    Row, Col, Form
} from "react-bootstrap"
import SingleBook from "./SingleBook"


class BookList extends Component {

    state = {
        searchQuery: ""
    }

    render() {


        return (
            <>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Cerca Libro
                            </Form.Label>
                            <Form.Control
                                type="=text"
                                placeholder="insert here your  book"
                                onChange={(e) =>
                                    this.setState({
                                        searchQuery: e.target.value
                                    })
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {this.props.books
                        .filter(b => b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                        .map(b => (
                            <Col xs={12} md={4} key={b.asin}>
                                <SingleBook
                                    book={b}
                                />
                            </Col>
                        ))}
                </Row>
            </>
        )


    }
}

export default BookList