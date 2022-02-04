import React, { useContext } from 'react';


import ActionItem from '../Actions/ActionItem';

import CaptureContext from '../../../capture/capture-context';

import { Row, Col } from 'react-bootstrap';

import './DashboardActionList.css';

const DashboardActionList = () => {

    const notesCtx = useContext(CaptureContext);

    

    const setStatusHandler = id => {
        notesCtx.setApiDoneItem(id);
    }
    
    
    const compareDate = (newDate, dateFilter = 'DAY') => {
        const MONTH = 1;
        const WEEK = 7;
        const DAY = 1;
        
        const thisMonth = new Date();
        const thisWeek = new Date();
        const tomorrow = new Date();
        const today = new Date();
        const yesterday = new Date(today);

        thisMonth.setMonth(thisMonth.getMonth() + MONTH); 
        thisWeek.setDate(thisWeek.getDate() + WEEK);
        tomorrow.setDate(tomorrow.getDate() + DAY);
        yesterday.setDate(yesterday.getDate() - 1);

        if(dateFilter === 'OVERDUE') {
            return (
                newDate <= yesterday
            );
        }

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


    const projectList = notesCtx.items.filter(item => (item.type === 2));
    const actionOnlyList = notesCtx.items.filter(item => (item.type === 4));

    const actionListOverdue = actionOnlyList.filter(item => compareDate(item.dateDue, 'OVERDUE'));
    const actionListDay = actionOnlyList.filter(item => compareDate(item.dateDue, 'DAY'));
    const actionListWeek = actionOnlyList.filter(item => compareDate(item.dateDue, 'WEEK'));
    const actionListMonth = actionOnlyList.filter(item => compareDate(item.dateDue, 'MONTH'));

    const listHandler = (list) => {

        let limit = list.slice(0,5);

        if(list.length > 0) {
            limit = list.slice(0,5);
            return (
                limit.map(action => {
                    const parentItems = projectList.filter(item => (item.id === action.parentId));
                    let parentTitle = '';
                    if(action.parentId !== null) {
                        parentTitle = parentItems[0].title;
                        console.log(parentTitle);
                    };
                    
                    return (
                        <React.Fragment>
                            
                            <ActionItem key={action.id}
                            setStatus={setStatusHandler}
                            actionItem={action}
                            parentTitle={parentTitle}      
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
        <div className="dashboard-action-list">
            <Row className="action-section">
                <Col>
                <h5>Overdue Tasks</h5>
                    {listHandler(actionListOverdue)}
                </Col>  
            </Row>
            <Row className="action-section">
                <Col>
                <h5>Due Today</h5>
                    {listHandler(actionListDay)}
                </Col>  
            </Row>
           
        </div>

    );
};

export default DashboardActionList;