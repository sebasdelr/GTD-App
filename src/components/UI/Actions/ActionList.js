import React, { useContext } from 'react';


import ActionItem from './ActionItem';

import CaptureContext from '../../../capture/capture-context';

import { Row, Col } from 'react-bootstrap';

const ActionList = () => {

    const notesCtx = useContext(CaptureContext);

    

    const setStatusHandler = id => {
        notesCtx.setDoneItem(id);
    }
    
    
    const compareDate = (newDate, dateFilter = 'DAY') => {
        const MONTH = 1;
        const WEEK = 7;
        const DAY = 1;
        
        const thisMonth = new Date();
        const thisWeek = new Date();
        const tomorrow = new Date();
        const today = new Date();

        thisMonth.setMonth(thisMonth.getMonth() + MONTH); 
        thisWeek.setDate(thisWeek.getDate() + WEEK);
        tomorrow.setDate(tomorrow.getDate() + DAY);

        if(dateFilter === 'DAY') {
            return (
                newDate.getDate() === today.getDate() &&
                newDate.getMonth() === today.getMonth() &&
                newDate.getFullYear() === today.getFullYear()
            );
        }
        if(dateFilter === 'WEEK') {
            return (
                newDate >= today &&
                newDate < thisWeek
            );
        }
        if(dateFilter === 'MONTH') {
            return (
                newDate >= today && 
                newDate < thisMonth
            );
        }

    };

    const projectList = notesCtx.items.filter(item => (item.type === "2"));
    const actionOnlyList = notesCtx.items.filter(item => (item.type === "4"));

    const actionListDay = actionOnlyList.filter(item => compareDate(item.dateDue, 'DAY'));
    const actionListWeek = actionOnlyList.filter(item => compareDate(item.dateDue, 'WEEK'));
    const actionListMonth = actionOnlyList.filter(item => compareDate(item.dateDue, 'MONTH'));

    const listHandler = (list) => {

        if(list.length > 0) {
            return (
                list.map(action => {
                    const parentItems = projectList.filter(item => (item.id === action.parentId));
                    let parentTitle = '';
                    if(action.parentId !== '') {
                        parentTitle = parentItems[0].title;
                        console.log(parentTitle);
                    };
                    
                    return (
                        <React.Fragment>
                            <p>{parentTitle}</p>
                            <ActionItem key={action.id}
                            setStatus={setStatusHandler}
                            actionItem={action}      
                            />
                            

                        </React.Fragment>

                    );

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
                    {listHandler(actionListDay)}
                </Col>  
            </Row>
            <Row>

                <Col>
                    <h5>This Week</h5>
                    {listHandler(actionListWeek)}
                </Col>   
            </Row>
            <Row>

                <Col>
                    <h5>This Month</h5>
                    {listHandler(actionListMonth)}
                </Col>
                
            </Row>

        </React.Fragment>

    );
};

export default ActionList;