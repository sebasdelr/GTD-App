import React, { useContext } from 'react';

import GanttChildren from './GanttChildren';
import GanttEmptyChildren from './GanttEmptyChildren';
import GanttBarChildren from './GanttBarChildren';
import { Tooltip} from 'react-bootstrap/';

import "./GanttView.css";

import CaptureContext from '../../../capture/capture-context';



const generateTableData = (projects) => {

    const projectOnlyList = projects.filter(item => (item.type === "2"));

    projectOnlyList.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

    if(projectOnlyList.length > 0) {

        return(
            projectOnlyList.map(item => {
    
                let day1 = item.startDate; 

               
                let day2 = item.dateDue;
    
                let difference = Math.abs(day2-day1);
                let days = Math.ceil(difference/(1000 * 3600 * 24));
    
                let childTasks = projects.filter(project => (project.parentId === item.id));

                return (
                    <React.Fragment>
                        <tr>
                        <td><b>{item.title}</b></td>
                        <td>{days}</td>
                        <td>{day1.toISOString().substring(0, 10)}</td>
                        <td>{day2.toISOString().substring(0, 10)}</td>
                        
                        
                        </tr>
                        {(childTasks.length > 0) && <GanttChildren list={childTasks}/>}
    
                    </React.Fragment>
                    
                    
                );
   
            })
    
        );

    } else {
        return (
            <div>
                No Items Found
            </div>
        );
    }
  
}

const generateEmptyCels = (projects) => {
    const projectOnlyList = projects.filter(item => (item.type === "2"));

    if(projectOnlyList.length > 0) {

        return(
            projectOnlyList.map(item => {
    
                let day1 = item.startDate; 
                let day2 = item.dateDue;
    
                let difference = Math.abs(day2-day1);
                let days = difference/(1000 * 3600 * 24);
    
                let childTasks = projects.filter(project => (project.parentId === item.id));

                return (
                    <React.Fragment>
                        <tr>
                            
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        {(childTasks.length > 0) && <GanttEmptyChildren list={childTasks}/>}
    
                    </React.Fragment>
                    
                    
                );
   
            })
    
        );

    } else {
        return (
            <div>
                No Items Found
            </div>
        );
    }

}

const setBarPosition = (amount) => {

    const cellHeight = -57.5;


    return (amount * cellHeight).toString() + "px";

}



const generateBars = (projects) => {

    const projectOnlyList = projects.filter(item => (item.type === "2"));

    projectOnlyList.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

    if(projectOnlyList.length > 0) {
        return (
        
            projectOnlyList.map(item => {

                let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
                
                const convConst = 5;
    
                //date needs to subtract or add a month
    
                let start = new Date(2021, 0, 1);
                let yearStart = start.getTime();
                let day1 = item.startDate; 
                let day2 = item.dateDue;
    
                let startMarker = ((Math.abs(day1-yearStart)) );
                       
                let daysTwo = Math.ceil(startMarker/(1000 * 3600 * 24)) * convConst  ;

    
                let difference = Math.abs(day2-day1);
                let days = (difference/(1000 * 3600 * 24))  * convConst ;
    
                let childTasks = projects.filter(project => (project.parentId === item.id));

                console.log(item.color);
    
                return (
    
                    // bar should be wrapped in a div, in case needing empty div
                    <React.Fragment>
                        <div
                        style={{
                            
                            height: "46px", 
                            marginTop: "10px",
                            padding: "19px 0"
                            // width: days + "px",
                            // marginTop: "19px",
                            // marginBottom: "19px",
                            // marginLeft: daysTwo + "px",
                            // borderRadius: "25px",
                            // position: "relative"
                        
                        }}>
                            <div 
                            // className="table-bar-content-bar"
                            style={{
                                background: item.color,
                                height: "20px", 
                                width: days + "px",
                                // paddingTop: "18px",
                                // // paddingBottom: "18px",
                                marginLeft: daysTwo + "px",
                                borderRadius: "25px",
                                // position: "relative"
                            
                            }}>

                            </div>
                        
                        
                        </div>
                        {(childTasks.length > 0) && <GanttBarChildren list={childTasks}/>}

                    </React.Fragment>
                    
                    
                    
                );
                
    
           
            })
        );

    } else {
        return (
            <div></div>
        );
    }
    
    
}

const GanttView = () => {


    const notesCtx = useContext(CaptureContext);


    const totalItems = () => {

        let total = 0;
        notesCtx.items.forEach(element => {
            if(element.type === "2"){
                total++;
                let childTasks = notesCtx.items.filter(project => (project.parentId === element.id));
                if(childTasks.length > 0) {
                    total = total + childTasks.length;
                }
                
            }
            
        });

        return total;
    }
    
    console.log(totalItems());

    
    return (
        <div className="ganttView">
            <h1>Timelines</h1>
            
            <div className="table-container">
                <div className="table-data-table">
                    <table>
                        <tr>
                            <th className="table-data-header-name">Project/Task Name</th>
                            <th className="table-data-header-name">Days Left</th>
                            <th className="table-data-header-name">Start Date</th>
                            <th className="table-data-header-name">End Date</th>

                        </tr>
                        {generateTableData(notesCtx.items)}


                        

                    </table>

                </div>
                <div className="table-bar-table">
                    
                    <table>
                    
                        <tr>
                            <th className="table-bar-header-month">January</th>
                            <th className="table-bar-header-month">February</th>
                            <th className="table-bar-header-month">March</th>
                            <th className="table-bar-header-month">April</th>
                            <th className="table-bar-header-month">May</th>
                            <th className="table-bar-header-month">June</th>
                            <th className="table-bar-header-month">July</th>
                            <th className="table-bar-header-month">August</th>
                            <th className="table-bar-header-month">September</th>
                            <th className="table-bar-header-month">October</th>
                            <th className="table-bar-header-month">November</th>
                            <th className="table-bar-header-month">December</th>
                        </tr>
                        
                        {generateEmptyCels(notesCtx.items)}
                        

                        
                       
           
                      
                        
                    </table>
                    <div 
                    // className="table-bar-content-progress-bars" 
                    style={{
                        position: "relative",
                        top: setBarPosition(totalItems())
                    
                    }}>                
                        {generateBars(notesCtx.items)}
                    </div>
                    
                    
                </div>
            </div>
            <div className="table-container-overlay">
                <div className="table-data-table-overlay">

                    <div className="table-data-body">
                       
                        <div>
                            <div className="table-data-body-separator"></div>
                            <div className="table-data-body-separator"></div>
                            <div className="table-data-body-separator"></div>
                            <div className="table-data-body-separator"></div>
                        </div>
                        
                        
                    </div>
                        

                </div>
                
                <div className="table-bar-table-overlay">

                    <div  className="table-bar-body">
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                        <div className="table-bar-body-separator"></div>
                    </div>
                   
                    
                    

                </div>
               
                
            </div>
            
            
            
           

        </div>

    );

};

export default GanttView;