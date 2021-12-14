import React from 'react';

const GanttChildren = (props) => {

    return (
        
        props.list.map(item => {

            let day1 = item.startDate; 
            let day2 = item.dateDue;

            let difference = Math.abs(day2-day1);
            let days = Math.ceil(difference/(1000 * 3600 * 24));

            

            return (
                <tr>
                    <td>&emsp;{item.title}</td>
                    <td>{days}</td>
                    <td>{day1.toISOString().substring(0, 10)}</td>
                    <td>{day2.toISOString().substring(0, 10)}</td>
                        
                    
                </tr>

                

            );

        })
        
        
    )
    
};

export default GanttChildren;
