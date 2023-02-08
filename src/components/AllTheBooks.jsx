import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import Books from "../data/fantasy.json"


function CardMain() {
    return (

        Books.map(book => {
            return (
                <Col xs={12} md={4} key={book.asin}>
                    < Card >
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.price}
                            </Card.Text>
                        </Card.Body>
                    </Card >
                </Col>
            )
        })
    );
}





export default CardMain;
// export default GroupExample;