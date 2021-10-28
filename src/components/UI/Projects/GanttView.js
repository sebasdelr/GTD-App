import React from 'react';

import { Table } from 'react-bootstrap';

const generateRows = () => {

}


const generateTable = () => {
    return (
        Array.apply(null, Array(12)).map(function (x, i) { return i; }).map(item => {
            return (
                <tr>
                    {Array.apply(null, Array(40)).map(function (x, i) { return i; }).map(item => {
                    return (
                        <td>{item}</td>
                    )
                    })}
                </tr>
                
            )
        })
        
        

    );
}

const GanttView = () => {


    return (
        <div>
            <p>Test</p>
            {/* <Table responsive>
                <tbody>
          
                        {generateTable()}
                    

                </tbody>
                


            </Table> */}
            <Table responsive>
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
            </Table>

        </div>

    );

};

export default GanttView;