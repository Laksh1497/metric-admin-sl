
import React , {useState} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";




const cardHandler = () => {
    setShowModule1(!showModule1);
    setShowModule2(!showModule2);
}

const dDetails = (props) => {

    const [showModule1,setShowModule1] = useState(true);
    const [showModule2,setShowModule2] = useState(false);

    const cardHandler = () => {
        setShowModule1(!showModule1);
        setShowModule2(!showModule2);
    }

    return(
        <Container>
            <Row>
                <Col>
                    {showModule1 && <Card>Module 1</Card> }
                    {showModule2 && <Card>Module 2</Card> }
                </Col>
                <Col>
                    <Button onClick = {cardHandler}>Click Me!</Button>
                </Col>
            </Row>
        </Container>
    );
}


export default dDetails;