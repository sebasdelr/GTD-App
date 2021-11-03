import React, { useContext } from 'react';

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

const generateTableData = (projects) => {
    return(
        projects.map(item => {
            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let difference = Math.abs(day2-day1);
            let days = difference/(1000 * 3600 * 24);

            return (
                <tr>
                    <td>{item.title}</td>
                    <td>{days}</td>
                    <td>{day1.toISOString().substring(0, 10)}</td>
                    <td>{day2.toISOString().substring(0, 10)}</td>
                    
                   
                </tr>
                
            );
        })

    );
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

            //add days left to a column

            console.log(daysLeftTwo);

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
            )
        })
    );
}

const GanttView = () => {

    const notesCtx = useContext(CaptureContext);
    const projectOnlyList = notesCtx.items.filter(item => (item.type === "2"));


    return (
        <div className="ganttView">
            <h1>Timelines</h1>
            <Row>
                <Col className="ganttData">
                    <Table responsive striped bordered hover size="sm"> 
                        <thead>
                            {generateHeader1()}
                        </thead>
                        <tbody>
                
                            {generateTableData(projectOnlyList)}
                            
                        </tbody>
                            
                    </Table>
                </Col>
                <Col className="ganttTable">
                    <Table responsive striped hover size="sm"> 
                        <thead>
                            {generateHeader2()}
                        </thead>
                        <tbody>
                
                            {generateTableCels(projectOnlyList)}
                            

                        </tbody>
                        


                    </Table>
                </Col>
            </Row>
            
            
            
            {/* <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                </tbody>
            </Table> */}

        </div>

    );

};

export default GanttView;