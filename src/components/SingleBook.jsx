import { Component } from 'react';
import Card from 'react-bootstrap/Card';


class SingleBook extends Component {
    state = {
        selected: ""

    }

    render() {

        return (

            <Card
                style={{ border: this.state.selected ? "2px solid red" : "" }}
            >
                <Card.Img
                    variant="top"
                    src={this.props.book.img}
                    onClick={() => this.setState({ selected: !this.state.selected })}
                />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card >
        )

    }
}
export default SingleBook