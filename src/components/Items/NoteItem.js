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
            
            flagCtx.setShow(true);
            
        } else {
            notesCtx.selectedItem(props.listItem);

        }
        // setTimeout(setLoadAlert(false), 3000);
        
        
    };

    const deleteItem = () => {
        if(flagCtx.flag) {
          flagCtx.setShow(true);
        } else {
          props.deleteItem(props.listItem.id);
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
            
            
            <span  onClick={toggleSelect}>{props.listItem.title}</span><Clear style={style}  onClick={deleteItem}/></ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;