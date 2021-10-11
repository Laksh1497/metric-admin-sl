import React from 'react';
import {Card,Row,Col,Table,Button} from 'react-bootstrap';
const tactics = (props) => {


    const onEditEntry = (action) => {
        
        props.editClick(action);
    }


    return(
        <div>
        <Row style = {{paddingTop: '3%',paddingBottom:'3%',paddingLeft:'1%'}}>
            <Col>
            <h4 >Tactics</h4>
            </Col>
            <Col>
            <Button variant="outline-secondary" style = {{marginLeft:'75%'}}>
                Add Tactic
            </Button>
            </Col>
        </Row>
        <Row>
        <Card.Body>
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
                {props.tacticsData.map(metricDetail => {
                                    return (
                                        <tr key = {metricDetail.id}>
                                            <td>{metricDetail.priority}</td>
                                            <td>{metricDetail.metric}</td>
                                            <td>{metricDetail.lastUpdated}</td>
                                            <td>{metricDetail.status}</td>
                                            <td> 
                                                <Button onClick={()=>onEditEntry("tactic")} variant = "outline-danger" size="sm">Edit</Button>
                                            </td>
                                        </tr>
                                    );
                                })} 
                </tbody>
            </Table>
            
    </Card.Body>
        </Row>
    </div>
    );
}


export default tactics;