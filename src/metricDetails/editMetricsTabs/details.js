import React from 'react';
import {Card,Row,Col,Table,Button, FormGroup, Form} from 'react-bootstrap';

const details = (props) => {
    return(
      
    <div>
        <Row style = {{paddingTop: '3%',paddingBottom:'3%',paddingLeft:'1%'}}>
            <Col>
            <h4>Details</h4>
            </Col>
            
            
        </Row>

        <Form style = {{paddingBottom:'7%'}}>

        
            {/* 1st Row */}
            <Row style = {{paddingLeft:'1%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Metric ID</Form.Label>
                    <Form.Control plaintext readOnly defaultValue ="123456"/>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Initial Metric Name</Form.Label>
                    <Form.Control plaintext readOnly defaultValue ="Unified PAS QM Form Version 3"/>
                </Form.Group>
                </Col>
            
            </Row>


            {/* 2nd Row */}
            <Row style = {{paddingLeft:'1%',paddingTop:'2%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Metric Display Name</Form.Label>
                    <Form.Control plaintext readOnly defaultValue ="Unified PAS QM Form Version 3"/>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Metric Calculation</Form.Label>
                    <Form.Control plaintext readOnly defaultValue ="((subMetricA)+(subMetricB))*100%"/>
                </Form.Group>
                </Col>
            
            </Row>



            <Row style = {{paddingLeft:'1%',paddingTop:'2%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Display Format</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>NN</option>
                    </Form.Select>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Metric Description</Form.Label>
                    <Form.Control plaintext readOnly defaultValue =""/>
                </Form.Group>
                </Col>
            
            </Row>
            <Row style = {{paddingLeft:'1%',paddingTop:'2%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Update Frequency</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Hourly</option>
                    </Form.Select>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Specific Times</Form.Label>
                    <Form.Control plaintext readOnly defaultValue ="1,2,3,4"/>
                </Form.Group>
                </Col>
            
            </Row>

            <Row style = {{paddingLeft:'1%',paddingTop:'2%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Goal</Form.Label>
                    <Form.Control type="number" placeholder="90"/>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Orientation: Regular or Inverse</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Regular</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            
            </Row>



            <Row style = {{paddingLeft:'1%',paddingTop:'2%'}}>
                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Coachable Metric</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Yes</option>
                    </Form.Select>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group className="mb-4">
                    <Form.Label style = {{fontWeight:'bold'}}>Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Active</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            
            </Row>
        </Form>










        {/* <Card.Body>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>Priority</th>
                    <th>Metric</th>
                    <th>Last Updated On</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {props.detailsData.map(metricDetail => {
                                    return (
                                        <tr key = {metricDetail.id}>
                                            <td>{metricDetail.priority}</td>
                                            <td>{metricDetail.metric}</td>
                                            <td>{metricDetail.lastUpdated}</td>
                                            <td>{metricDetail.status}</td>
                                            <td> 
                                                <Button onClick={()=>onEditEntry(metricDetail)} variant = "outline-danger" size="sm">Edit</Button>
                                            </td>
                                        </tr>
                                    );
                                })} 
                </tbody>
            </Table>
            
    </Card.Body> */}
        
    </div>
            
       
    );
}


export default details;