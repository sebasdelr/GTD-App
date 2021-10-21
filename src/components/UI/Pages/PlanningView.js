import React, { useContext } from 'react';

import { Table, Form } from 'react-bootstrap';

import CaptureContext from '../../../capture/capture-context';

const PlanningView = () => {
    const notesCtx = useContext(CaptureContext);

    const noteLIst = notesCtx.items.map(item => {

        return(
            <tr>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>
                <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelect">
                    <option value>Choose...</option>
                    <option value="1">Do</option>
                    <option value="2">Delete</option>
                    <option value="3">Defer</option>
                    <option value="4">Delegate</option>
                </Form.Control >
            </td>
            <td></td>
            </tr>
        );


    });

    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Decide</th>
                </tr>
            </thead>
            <tbody>{noteLIst}</tbody>

        </Table>


    );

};

export default PlanningView;