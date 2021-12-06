import React, { useContext } from 'react';

import GanttChildren from './GanttChildren';

import { Table, Col, Row } from 'react-bootstrap';

import "./GanttView.css";

import CaptureContext from '../../../capture/capture-context';

const generateHeader1 = () => {
    return (
        <tr>
            <th>Project</th>
            <th>Days Left</th>
            <th>Start Date</th>
            <th>End Date</th>
            
        </tr>
    );

}



const generateHeader2 = () => {
    return (
        <tr>

            {Array.from({ length: 365 }).map((_, index) => (
                <th key={index} className="headerNumber">{index}</th>
            ))}
        </tr>
    );

}

//parselist will parse list, concatenate html elements
//it will call function depending on level, function will render item individually



const generateTableData = (projects, hierarchy) => {

    const projectOnlyList = projects.filter(item => (item.type === "2"));

    if(projectOnlyList.length > 0) {

        return(
            projectOnlyList.map(item => {
    
                let day1 = item.startDate; 
                let day2 = item.dateDue;
    
                let difference = Math.abs(day2-day1);
                let days = difference/(1000 * 3600 * 24);
    
                let childTasks = projects.filter(project => (project.parentId === item.id));

                return (
                    <React.Fragment>
                        <tr>
                        <td><b>{item.title}</b></td>
                        <td>{days}</td>
                        <td>{day1.toISOString().substring(0, 10)}</td>
                        <td>{day2.toISOString().substring(0, 10)}</td>
                        
                        
                        </tr>
                        {(childTasks.length > 0) && <GanttChildren list={childTasks}/>}
    
                    </React.Fragment>
                    
                    
                );
   
            })
    
        );

    } else {
        return (
            <div>
                No Items Found
            </div>
        );
    }
  
}



const generateTableCels = (projects) => {
    

    return (


        

        
        projects.map(item => {
            let yearStart = new Date(2021, 1, 1);
            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let startMarker = Math.abs(day1-yearStart);
            let daysTwo = startMarker/(1000 * 3600 * 24);

            let difference = Math.abs(day2-day1);
            let days = difference/(1000 * 3600 * 24);

            let daysLeft = days;
            let daysLeftTwo = daysTwo;

            if(item.type === "2") {

                let childTasks = projects.filter(project => (project.parentId === item.id));

                if(childTasks.length > 0) {
                    generateTableCels(childTasks);
                    console.log("children");
                } 
                return (
                    <tr>               
                        {Array.apply(null, Array(365)).map(function (x, i) { return i; }).map(item => {

                            if (daysLeftTwo > 0) {
                                daysLeftTwo--;
                                return (
                                    <td></td>
                                )
                            } else {
                                if (daysLeft > 0) {
                                    daysLeft--;
                                    return (
                                        <td className="activeCel"></td>
                                    )
                                    
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }

                            }
                        })}
                    </tr> 
                    
                );

            } else {
                return (
                    <tr>               
                        {Array.apply(null, Array(365)).map(function (x, i) { return i; }).map(item => {

                            if (daysLeftTwo > 0) {
                                daysLeftTwo--;
                                return (
                                    <td></td>
                                )
                            } else {
                                if (daysLeft > 0) {
                                    daysLeft--;
                                    return (
                                        <td className="activeCelChild"></td>
                                    )
                                    
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }

                            }
                        })}
                    </tr>
                    
                );
            }

       
        })
    );
}

const GanttView = () => {

    const notesCtx = useContext(CaptureContext);
    const projectOnlyList = notesCtx.items.filter(item => (item.type === "2"));


    return (
        <div className="ganttView">
            <h1>Timelines</h1>
            {/* <Row>
                <Col className="ganttData">
                    <Table responsive striped bordered hover size="sm"> 
                        <thead>
                            {generateHeader1()}
                        </thead>
                        <tbody>
                
                            {generateTableData(notesCtx.items, "1")}
                            
                        </tbody>
                            
                    </Table>
                </Col>
                <Col className="ganttTable">
                    <Table responsive striped hover size="sm"> 
                        <thead>
                            {generateHeader2()}
                        </thead>
                        <tbody>
                
                            {generateTableCels(notesCtx.items)}
                            

                        </tbody>
                        


                    </Table>
                </Col>
            </Row> */}
            <div className="table-container">
                <div className="table-data-table">
                    <div className="table-data-header">
                        <div className="table-data-header-name">Project Name</div>
                        <div className="table-data-header-name">Days Left</div>
                        <div className="table-data-header-name">Start Date</div>
                        <div className="table-data-header-name">End Date</div>
                    </div>
                    

                </div>
                <div className="table-bar-table">
                    <div className="table-bar-header">
                        
                        
                        <div className="table-bar-header-month">February</div>
                        <div className="table-bar-header-month">March</div>
                        <div className="table-bar-header-month">April</div>
                        <div className="table-bar-header-month">May</div>
                        <div className="table-bar-header-month">June</div>
                        <div className="table-bar-header-month">July</div>
                        <div className="table-bar-header-month">August</div>
                        <div className="table-bar-header-month">September</div>
                        <div className="table-bar-header-month">October</div>
                        <div className="table-bar-header-month">November</div>
                        <div className="table-bar-header-month">December</div>
                        

                    </div>
                    <div  className="table-bar-body-separators">
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                        <div className="table-bar-body-separator">
                        
                        </div>
                    </div>
                    <div className="table-bar-body-row-odd">
                        {/* <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                        <div className="table-data-cell">
                        
                        </div>
                         <div className="table-data-cell">
                        
                        </div> */}
                    </div>
                    {/* <div className="table-data-row-odder">
                        
                    </div>
                    <div className="table-data-row-odderer">
                        
                    </div>
                     */}
                    
                    

                </div>
            </div>
            
            
            
           

        </div>

    );

};

export default GanttView;