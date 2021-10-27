import React from 'react';

import { Table } from 'react-bootstrap';


const generateTable = () => {
    return (
        [1,2,3,4,5,6,7,8,9,10,11,12].map(item => {
            return (
                <td>{item}</td>
            )
        })

    );
}

const GanttView = () => {


    return (
        <Table>
            <tbody>
                <tr>
                    {generateTable}
                </tr>

            </tbody>
            


        </Table>
    );

};

export default GanttView;