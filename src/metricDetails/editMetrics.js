import React,{useRef, useState} from 'react';
import {Card,Tabs,Tab,Button} from 'react-bootstrap';
import "../App.css";


import Behaviors from './editMetricsTabs/behaviors';
import Details from './editMetricsTabs/details';
import EditTactic from './editMetricsTabs/editOptions/editTactic';
import EditBehavior from './editMetricsTabs/editOptions/editBehavior';
import EditRootCause from './editMetricsTabs/editOptions/editRootCause';

import RootCauses from './editMetricsTabs/rootCauses';
import Tactics from './editMetricsTabs/tactics';

const editMetrics = (props) => {

    const detailsRef = useRef(null);
    const behaviorsRef = useRef(null);
    const tacticsRef = useRef(null);
    const rootCausesRef = useRef(null);


    const [showEditMetrics,setShowEditMetrics] = useState(true);
    const [showEditBehavior,setShowEditBehavior] = useState(false);
    const [showEditTactic,setShowEditTactic] = useState(false);
    const [showEditRootCause,setShowEditRootCause] = useState(false);



    const scrollDetails = () => {
        detailsRef.current.scrollIntoView({behavior:"smooth"});
    }

    const scrollBehaviors = () => {
        behaviorsRef.current.scrollIntoView({behavior:"smooth"});
    }
        
    const scrollTactics = () => {
        tacticsRef.current.scrollIntoView({behavior:"smooth"});
 
    }


    const scrollRootCauses = () => {
        rootCausesRef.current.scrollIntoView({behavior:"smooth"});
        // window.scrollTo({
        //     top: rootCausesRef.current.offsetTop,
        //     behavior:"smooth"    
        // });
    }


    const editHandler = (action) => {
        if(action=="behavior"){
            setShowEditBehavior(true);
            setShowEditMetrics(false);
            setShowEditTactic(false);
            setShowEditRootCause(false);
        }
        else if(action=="tactic"){
            setShowEditBehavior(false);
            setShowEditMetrics(false);
            setShowEditTactic(true);
            setShowEditRootCause(false);
        }
        else{
            setShowEditBehavior(false);
            setShowEditMetrics(false);
            setShowEditTactic(false);
            setShowEditRootCause(true);
        }
    }


    return(
        <div>

        { showEditMetrics && 
        <div id="edit-metrics">
            <div id="button-navigation">
                <Button variant="outline-dark"  size = "lg" onClick={scrollDetails} style = {{marginRight:'1%'}}>Details</Button>
                <Button variant="outline-dark"   size = "lg" onClick={scrollBehaviors} style = {{marginRight:'1%'}}>Behaviors</Button>
                <Button variant="outline-dark"  size = "lg" onClick={scrollTactics} style = {{marginRight:'1%'}}>Tactics</Button>
                <Button variant="outline-dark" size = "lg" onClick={scrollRootCauses} style = {{marginRight:'1%'}}>Root Causes</Button>
            </div>
        
        
                <Card.Body className="ex1">
                    <div id="scrollable">
                    <Card ref = {detailsRef} style = {{borderLeft:'none'}} >
                        <Details detailsData = {props.editmetricData}/>
                    </Card>
                
                
                    <Card ref = {behaviorsRef} style = {{borderLeft:'none'}}>
                        <Behaviors behaviorsData = {props.editmetricData} editClick={(e) => editHandler(e)}/>
                    </Card>
                
                    <Card ref = {tacticsRef} style = {{borderLeft:'none'}}>
                        <Tactics tacticsData = {props.editmetricData} editClick={(e) => editHandler(e)}/>
                    </Card>
                
                    <Card ref = {rootCausesRef} style = {{borderLeft:'none'}}>
                        <RootCauses rootCausesData = {props.editmetricData} editClick={(e) => editHandler(e)}/>
                    </Card>
                     </div>      
                </Card.Body> 
           
        </div> }
        {showEditBehavior &&
           <EditBehavior behaviorsData = {props.editmetricData}/>
        }
        {showEditTactic &&
            <EditTactic/>
        }
        {showEditRootCause &&
           <EditRootCause/>
        }
    </div>
    );
}
    
export default editMetrics;