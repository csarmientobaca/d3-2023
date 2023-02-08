import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function RowBotom(props) {
    return (

        <Row>
            <Col className="bg-danger fixed-bottom text-center">
                {
                    <h1>

                        {
                            props.name

                        }
                    </h1>
                }
            </Col>
        </Row>
    )
}
export default RowBotom