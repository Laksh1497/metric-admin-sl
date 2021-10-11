import React, { useState } from 'react';
import "../../../App.css";
import {Button,Card,Row,Col,Form,Table} from 'react-bootstrap';
import ToggleSwitch from '../../../ToggleSwitch/toggleSwitch';


const editBehavior = (props) => {


    const [showEditBehavior,setShowEditBehavior] = useState(true);
    const [showEditSubBehavior,setShowEditSubBehavior] = useState(false);


    const [selectedSubBehavior,setSelectedSubBehavior] = useState(null);


    const onEditSubBehaviorHandler = (data) => {
        setSelectedSubBehavior({data});
        setShowEditBehavior(!showEditBehavior);
        setShowEditSubBehavior(!showEditSubBehavior);
    }


    if(showEditBehavior){
        return(
            <div id="edit-metrics" style = {{paddingTop:'2%'}}>
                <div id="button-navigation" >
                    <Button variant="outline-dark"  size = "lg"  style = {{marginRight:'1%'}}>Details</Button>
                    <Button variant="outline-dark"   size = "lg"  style = {{marginRight:'1%'}}>Sub-Behaviors</Button>
                </div>
                <Card.Body className = "ex1">
                    <div id="scrollable">
                    <Card style = {{borderLeft:'none'}} >
                        <Row style = {{paddingTop: '3%',paddingBottom:'3%',paddingLeft:'0%'}}>
                            <Col>
                            <h4>Details</h4>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%'}}>
                            <Col>
                            <Form.Group className="mb-4">
                                <Form.Label style = {{fontWeight:'bold'}}>Status</Form.Label>
                                <div>
                                <ToggleSwitch/>
                                </div>
                               
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%',paddingRight:'2%'}}>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Behavior ID</Form.Label>
                                    <Form.Control plaintext readOnly defaultValue ="B123456"/>
                                </Form.Group>
                                </Col>

                                <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Initial Behavior Name</Form.Label>
                                    <Form.Control type="text" readOnly defaultValue ="Agent - Patient Interaction"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%',paddingRight:'2%'}}>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Behavior Description</Form.Label>
                                    <Form.Control as="textarea" rows = {3} />
                                </Form.Group>
                            </Col>

                                
                        </Row>
                    </Card>
                    <Card style={{borderLeft:'none'}}>
                        <Row style = {{paddingTop: '3%',paddingBottom:'3%',paddingLeft:'0%'}}>
                            <Col>
                            <h4>Sub-Behaviors</h4>
                            </Col>
                            <Col>
                            <Button variant="outline-secondary" style = {{marginLeft:'65%',paddingRight:'1%'}}>
                                Add Sub-Behavior
                            </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Body >
                                <Table responsive >
                                    <thead>
                                    <tr>
                                        <th>Priority</th>
                                        <th>Metric</th>
                                        <th>Last Updated On</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.behaviorsData.map(metricDetail => {
                                                        return (
                                                            <tr key = {metricDetail.id}>
                                                                <td>{metricDetail.priority}</td>
                                                                <td>{metricDetail.metric}</td>
                                                                <td>{metricDetail.lastUpdated}</td>
                                                                <td>{metricDetail.status}</td>
                                                                <td> 
                                                                    <Button onClick={()=>onEditSubBehaviorHandler(metricDetail)} variant = "outline-danger" size="sm">Edit</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })} 
                                    </tbody>
                                </Table>
                                
                        </Card.Body>
                        </Row>
                    </Card>
                    </div>
                </Card.Body>
        </div>

        )
    }

    else{
        return (
            <div id="edit-metrics" style = {{paddingTop:'2%'}}>
                
                <Card.Body className = "ex1">
                    <div id="scrollable">
                    <Card style = {{borderLeft:'none'}} >
                        <Row style = {{paddingTop: '3%',paddingBottom:'3%',paddingLeft:'0%'}}>
                            <Col>
                            <h4>Details</h4>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%'}}>
                            <Col>
                            <Form.Group className="mb-4">
                                <Form.Label style = {{fontWeight:'bold'}}>Status</Form.Label>
                                <div>
                                <ToggleSwitch/>
                                </div>
                               
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%',paddingRight:'2%'}}>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Behavior ID</Form.Label>
                                    <Form.Control plaintext readOnly defaultValue ="B123456"/>
                                </Form.Group>
                                </Col>

                                <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Initial Behavior Name</Form.Label>
                                    <Form.Control type="text" readOnly defaultValue ="Agent - Patient Interaction"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style = {{paddingLeft:'0%',paddingTop:'2%',paddingRight:'2%'}}>
                            <Col>
                                <Form.Group className="mb-4">
                                    <Form.Label style = {{fontWeight:'bold'}}>Behavior Description</Form.Label>
                                    <Form.Control as="textarea" rows = {3} />
                                </Form.Group>
                            </Col>

                                
                        </Row>
                    </Card>
                </div>
                </Card.Body>
            </div>
        );
    }
    
}


export default editBehavior;