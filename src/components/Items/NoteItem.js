import "./Items.css";

import React, { useState, useContext } from "react";


import Clear from '@material-ui/icons/Clear';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

import CaptureContext from '../../capture/capture-context';
import UnsavedContext from '../../capture/unsaved-context';



import NoteFormDirtyAlert from '../UI/Notes/NoteFormDirtyAlert';



const NoteItem = (props) => {

    const notesCtx = useContext(CaptureContext);
    const flagCtx = useContext(UnsavedContext);

    const [style, setStyle] = useState({display: 'none'});
    const [loadAlert, setLoadAlert] = useState(false);

    const resetAlert = () => {
        setLoadAlert(false);
    }

    const toggleSelect = () => {
        if(flagCtx.flag){
            console.log("please save");
            setLoadAlert(true);
            
        } else {
            notesCtx.selectedItem(props.listItem);

        }
        // setTimeout(setLoadAlert(false), 3000);
        
        
    };

    const deleteItem = () => {
        props.deleteItem(props.listItem.id);
    }

    return(
        <ListGroup  variant="flush" onMouseEnter={e => {
            setStyle({position: 'relative' , display: 'inline'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
            <ListGroup.Item className={props.selectStyle}>
            {loadAlert && <NoteFormDirtyAlert onClick={resetAlert}/>}
            <span  onClick={toggleSelect}>{props.listItem.title}</span><Clear style={style}  onClick={deleteItem}/></ListGroup.Item>
        </ListGroup>



    );


} 

export default NoteItem;