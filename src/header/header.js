import React from "react";
import { Container,Row, Col,Image } from "react-bootstrap";


const header = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col >
                        <Image src="https://amplifai-demo.azurewebsites.net/images/calabrio-logo-demo.svg" fluid/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default header;