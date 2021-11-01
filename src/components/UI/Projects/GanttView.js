import React, { useContext } from 'react';

import { Table } from 'react-bootstrap';

import "./GanttView.css";

import CaptureContext from '../../../capture/capture-context';

const generateHeader = () => {
    return (
        <tr>
            <th>#</th>
            {Array.from({ length: 365 }).map((_, index) => (
                <th key={index}>{index}</th>
            ))}
        </tr>
    );

}


const generateTable = (projects) => {
    return (

        
        projects.map(item => {
            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let difference= Math.abs(day2-day1);
            let days = difference/(1000 * 3600 * 24)

            let daysLeft = days;

            console.log(days);

            return (
                <tr>
                    <td>{item.title}</td>
                    {Array.apply(null, Array(365)).map(function (x, i) { return i; }).map(item => {
                    
                    daysLeft--;

                    if (daysLeft > 0) {
                        return (
                            <td>o</td>
                        )
                        
                    } else {
                        return (
                            <td></td>
                        )
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
        <div className="ganttTable">
            <p>Test</p>
            <Table responsive > 
                <thead>
                    {generateHeader()}
                </thead>
                <tbody>
          
                    {generateTable(projectOnlyList)}
                    

                </tbody>
                


            </Table>
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