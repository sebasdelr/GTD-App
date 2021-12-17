import React from 'react';

const GanttBarChildren = (props) => {

    props.list.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

    return (
        
        props.list.map(item => {

            let randomColor = Math.floor(Math.random()*16777215).toString(16);

            const tableWidth = 1800;
            const cellHeight = 58;
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
                                background: "#" + randomColor,
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
                        

                    </React.Fragment>
                
                
            );

        })
        
        
    )
    
};

export default GanttBarChildren;
