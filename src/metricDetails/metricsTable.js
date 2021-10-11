import React from 'react';
import "../App.css";
import {Table,Card,Button} from 'react-bootstrap';
import metricDetails from './metricDetails';



const metricsTable = (props) =>{

    const onEditEntry = (metricDetail) => {
        var entry = metricDetail;
        props.onEdit(entry);
    }



    return (
        <div className="Metrics_main">
        <div className= "top_div1">
            <Card id="scrollable" style= {{height:'270%',borderLeft:'none'}}>
                    <Card.Body>
                        
                            <Table responsive>
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
                                    {props.metricDetails.map(metricDetail => {
                                        return (
                                            <tr key = {metricDetail.id}>
                                                <td style = {{fontWeight:'bold'}}>{metricDetail.priority}</td>
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
                         
                    </Card.Body>
            </Card>
        </div>
        </div> 
    );
}


export default metricsTable;