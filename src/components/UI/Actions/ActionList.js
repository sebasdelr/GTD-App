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

    const compareDateWeek = newDate => {

        const WEEK = 7;
        const DAY = 1;
        const today = new Date();
        // const thisWeek = new Date(today);
        const thisWeek = new Date();
        thisWeek.setDate(thisWeek.getDate() + WEEK);

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + DAY);


        return (
            newDate >= today &&
            newDate < thisWeek
        );
    };

    const compareDateMonth = newDate => {

        const MONTH = 1;
        const DAY = 1;
        const today = new Date();
        // const thisWeek = new Date(today);
        const thisMonth = new Date();
        thisMonth.setMonth(thisMonth.getMonth() + MONTH); 

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + DAY);


        return (
            newDate >= today &&
            newDate < thisMonth
        );
    };

    const listHandlerToday = () => {
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
    };

    const listHandlerWeek = () => {
        const actionOnlyList = notesCtx.items.filter(item => (item.type === "4" && compareDateWeek(item.dateDue)));


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
    };

    const listHandlerMonth = () => {
        const actionOnlyList = notesCtx.items.filter(item => (item.type === "4" && compareDateMonth(item.dateDue)));


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
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h5>Today</h5>
                    {listHandlerToday()}
                </Col>

                
            </Row>
            <Row>

                <Col>
                    <h5>This Week</h5>
                    {listHandlerWeek()}
                </Col>

                
            </Row>
            <Row>

                <Col>
                    <h5>This Month</h5>
                    {listHandlerMonth()}
                </Col>
                
            </Row>

        </React.Fragment>

    );
};

export default ActionList;