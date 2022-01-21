import "./Items.css";

import React, { useState, useContext } from "react";


import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';



import CaptureContext from '../../capture/capture-context';
import UnsavedContext from '../../capture/unsaved-context';

// import NoteFormDirtyAlert from '../UI/Notes/NoteFormDirtyAlert';



const NoteItem = (props) => {

    const notesCtx = useContext(CaptureContext);
    const flagCtx = useContext(UnsavedContext);

    const [style, setStyle] = useState({display: 'none'});

   


    const toggleSelect = () => {

        

        if(flagCtx.flag){

            const confirmed = window.confirm("Are you sure?");
        
            if (confirmed) {
                notesCtx.selectedItem(props.listItem);
                flagCtx.setFlag(false);
            }
            
            // flagCtx.setShow(true);
            // if(flagCtx.revert) {
            //     console.log("reverting?");
            //     flagCtx.setRevert(false);
            //     flagCtx.setFlag(false);
            //     notesCtx.selectedItem(props.listItem);
            // }
            
        } else {
            notesCtx.selectedItem(props.listItem);

        }
        // setTimeout(setLoadAlert(false), 3000);
        
        
    };

    const deleteItem = () => {

        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if(confirmed) {
            // notesCtx.deleteItem(props.listItem.id);
            notesCtx.deleteApiItem(props.listItem.id);
            if(notesCtx.items.length > 1) {
                notesCtx.itemIndex = 0;
                console.log(notesCtx.items.length);
            } else {
                
                notesCtx.itemIndex = 'test';
                console.log(isNaN(notesCtx.itemIndex));
            }
            
        }
        
    }

    return(
        <ListGroup  variant="flush" onMouseEnter={e => {
            setStyle({position: 'relative' , display: 'inline'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
            <ListGroup.Item className={props.selectStyle}>
            
            
            <div className="note-item-title"  onClick={toggleSelect}>{props.listItem.title}<Clear style={style}  onClick={deleteItem}/></div>
            <div className="note-item-description">{props.listItem.content}</div>
            </ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;