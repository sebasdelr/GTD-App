import React, { useContext } from 'react';

import { Table } from 'react-bootstrap';

import CaptureContext from '../../../capture/capture-context';

const PlanningView = () => {
    const notesCtx = useContext(CaptureContext);

    const noteLIst = notesCtx.items.map(item => {

        return(
            <tr>
            <td>{item.title}</td>
            <td>{item.type}</td>
            </tr>
        );


    });

    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>{noteLIst}</tbody>

        </Table>


    );

};

export default PlanningView;