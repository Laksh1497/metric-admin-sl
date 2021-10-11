import React from "react";
import { Container,Row, Col,Image,Button} from "react-bootstrap";
import "../App.css";


const header = () => {
    return(
            <Row style={{paddingLeft:'2%'}}>
                <Col>
                <div 
                    className="header_main" 
                    style = {{paddingLeft: '0%'}}>
                    <br/>
                    <br/>
                    <h4  
                        style= {{paddingLeft: '0%', marginBottom:'0%'}}>
                             Tenant Name   
                    </h4> 
                    <p 
                        style= {{paddingLeft: '0%', paddingBottom: '2%'}}> 
                        Metric Administration 
                    </p>
                </div>
                </Col>
               
            </Row>
    );
}

export default header;