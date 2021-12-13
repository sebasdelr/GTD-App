import React, { useContext } from 'react';

import GanttChildren from './GanttChildren';
import GanttEmptyChildren from './GanttEmptyChildren';

import "./GanttView.css";

import CaptureContext from '../../../capture/capture-context';

const generateHeader1 = () => {
    return (
        <tr>
            <th>Project</th>
            <th>Days Left</th>
            <th>Start Date</th>
            <th>End Date</th>
            
        </tr>
    );

}



const generateHeader2 = () => {
    return (
        <tr>

            {Array.from({ length: 365 }).map((_, index) => (
                <th key={index} className="headerNumber">{index}</th>
            ))}
        </tr>
    );

}

//parselist will parse list, concatenate html elements
//it will call function depending on level, function will render item individually



const generateTableData = (projects) => {

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



const generateTableCels = (projects) => {
    

    return (


        

        
        projects.map(item => {
            let yearStart = new Date(2021, 1, 1);
            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let startMarker = Math.abs(day1-yearStart);
            let daysTwo = startMarker/(1000 * 3600 * 24);

            let difference = Math.abs(day2-day1);
            let days = difference/(1000 * 3600 * 24);

            let daysLeft = days;
            let daysLeftTwo = daysTwo;

            if(item.type === "2") {

                let childTasks = projects.filter(project => (project.parentId === item.id));

                if(childTasks.length > 0) {
                    generateTableCels(childTasks);
                    console.log("children");
                } 
                return (
                    <tr>               
                        {Array.apply(null, Array(365)).map(function (x, i) { return i; }).map(item => {

                            if (daysLeftTwo > 0) {
                                daysLeftTwo--;
                                return (
                                    <td></td>
                                )
                            } else {
                                if (daysLeft > 0) {
                                    daysLeft--;
                                    return (
                                        <td className="activeCel"></td>
                                    )
                                    
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }

                            }
                        })}
                    </tr> 
                    
                );

            } else {
                return (
                    <tr>               
                        {Array.apply(null, Array(365)).map(function (x, i) { return i; }).map(item => {

                            if (daysLeftTwo > 0) {
                                daysLeftTwo--;
                                return (
                                    <td></td>
                                )
                            } else {
                                if (daysLeft > 0) {
                                    daysLeft--;
                                    return (
                                        <td className="activeCelChild"></td>
                                    )
                                    
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }

                            }
                        })}
                    </tr>
                    
                );
            }

       
        })
    );
}


const generateBars = (projects) => {
    
    return (
        
        projects.map(item => {

            const tableWidth = 1800;
            const cellHeight = 58;
            const convConst = 493;

            let yearStart = new Date(2021, 1, 1);
            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let startMarker = ((Math.abs(day1-yearStart)) );
            
            let daysTwo = (startMarker/(1000 * 3600 * 24))  ;

            // console.log(daysTwo * convConst);

            let difference = Math.abs(day2-day1);
            let days = (difference/(1000 * 3600 * 24));

            let daysLeft = days;
            let daysLeftTwo = daysTwo;

            

            
            return (

                // bar should be wrapped in a div, in case needing empty div
                <div 
                className="table-bar-content-bar"
                style={{
                    background: "aquamarine",
                    height: "30px", 
                    width: days + "px",
                    marginTop: "15px",
                    marginLeft: daysTwo + "px",
                    borderRadius: "25px",
                   
                }}

                
                
                ></div>
                
                
            );
            

       
        })
    );
}

const GanttView = () => {

    const notesCtx = useContext(CaptureContext);
    const projectOnlyList = notesCtx.items.filter(item => (item.type === "2"));


    return (
        <div className="ganttView">
            <h1>Timelines</h1>
            
            <div className="table-container">
                <div className="table-data-table">
                    <table>
                        <tr>
                            <th className="table-data-header-name">Project Name</th>
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
                    <div className="table-bar-content-progress-bars" >
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