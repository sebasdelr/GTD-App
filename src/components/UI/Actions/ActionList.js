import React, { useContext } from 'react';


import ActionItem from './ActionItem';

import CaptureContext from '../../../capture/capture-context';

import { Row, Container, Col } from 'react-bootstrap';

const ActionList = () => {

    const notesCtx = useContext(CaptureContext);
    
    


    const compareDateToday = newDate => {
        const today = new Date();

        return (
            newDate.getDate() === today.getDate() &&
            newDate.getMonth() === today.getMonth() &&
            newDate.getFullYear() === today.getFullYear()
        );
    };

    const listHandler = () => {
        const actionOnlyList = notesCtx.items.filter(item => (item.type === "4" && compareDateToday(item.dateDue)));


        if(actionOnlyList.length > 0) {
            return (
                actionOnlyList.map((action) => {
                   

                    return (
                        <ActionItem key={action.id}
                            
                        actionItem={action}

                        
                    />);


                    

                })
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h5>Today</h5>
                    {listHandler()}
                </Col>

                
            </Row>
            <Row>

                <Col>
                    <h5>This Week</h5>
                    {listHandler()}
                </Col>

                
            </Row>
            <Row>

                <Col>
                    <h5>This Month</h5>
                    {listHandler()}
                </Col>
                
            </Row>

        </React.Fragment>

    );
};

export default ActionList;