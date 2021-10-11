
import React , {useState} from "react";
import { Container, Row, Col, Button, Card , Table,Sonnet,Tab,Tabs} from "react-bootstrap";


import "../App.css";
import Header from '../header/header';
import MetricsTable from './metricsTable';
import EditMetrics from "./editMetrics";





const metricDetails = (props) => {

    const [showModule1,setShowModule1] = useState(true);

    const [showModule2,setShowModule2] = useState(false);

    const [selectedMetricDetail,setSelectedMetricDetail] = useState({});
    
    const [metricDetails,setMetricDetails] = useState(
        [
            {
                id:100,
                priority:1,
                metric:"Unified PAS QM Form Version 3",
                lastUpdated:"04/06/2020",
                status:"Active"
            },
            {
                id:101,
                priority:4,
                metric:"Unified Version 5",
                lastUpdated:"04/07/2020",
                status:"Offline"
            },
            {
                id:102,
                priority:2,
                metric:"Pact Made version 7",
                lastUpdated:"21/07/2021",
                status:"Active"
            },
            {
                id:103,
                priority:4,
                metric:"Pact version 9",
                lastUpdated:"21/06/2021",
                status:"Active"
            },
            {
                id:104,
                priority:2,
                metric:"Pact Made 7",
                lastUpdated:"01/07/2021",
                status:"Offline"
            },
            {
                id:105,
                priority:2,
                metric:"Pact Made 7",
                lastUpdated:"01/07/2021",
                status:"Offline"
            },
            {
                id:106,
                priority:2,
                metric:"Pact Made 7",
                lastUpdated:"01/07/2021",
                status:"Offline"
            },
            {
                id:107,
                priority:2,
                metric:"Pact Made 7",
                lastUpdated:"01/07/2021",
                status:"Offline"
            }
        ]
    );


    const cardHandler = (data) => {
        setSelectedMetricDetail(data);
        setShowModule1(!showModule1);
        setShowModule2(!showModule2);
    }

    return(
            <div>

                <Header/>
            
                <Row style = {{paddingLeft:'2%'}}>
                    <Col>
                        {showModule1 && 
                            <MetricsTable metricDetails = {metricDetails} onEdit={(e) => cardHandler(e)}/>   
                        }
                        {showModule2 && 
                            <EditMetrics editmetricData = {metricDetails}/>
                        }
                    </Col>
                </Row>
            </div>
    );
}


export default metricDetails;