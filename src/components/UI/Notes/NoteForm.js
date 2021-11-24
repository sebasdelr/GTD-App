import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col, Modal} from 'react-bootstrap/';
import { BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

import './NoteForm.css';

import CaptureContext from '../../../capture/capture-context';

import NoteFormDirtyAlert from './NoteFormDirtyAlert';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const projectListHandler = list => {
    if(list.length > 0) {
        return (
            list.map(item => {
                return (
                    <option value={item.id}>{item.title}</option>
                );

            })
        );

    }
    else {
        return (
            <option value='1'>No projects found</option>
        );
    }

};

const checkDateDifference = (day1, day2) => {
    if(day2 > day1) {
        return true;
    } else {
        return false;
    }


};

const NoteForm = () => {

    

    const notesCtx = useContext(CaptureContext);

    let selectedItem = notesCtx.items[notesCtx.itemIndex];

    const [showAlert, setShowAlert] = useState(false);
    const [getStartDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [itemType, setItemType] = useState(selectedItem.type);
    const [parentItem, setParentItem] = useState(selectedItem.parentId);
    const [arterMessage, setAlertMessage] = useState();
    const [dirtyFlag, setDirtyFlag] = useState(false);

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!
    
    const contentRef = useRef();
    const idRef = useRef();
    const typeRef = useRef();

    const projectList = notesCtx.items.filter(item => (item.type === "2"));

    const dirtyFlagHandler = () => {
        setDirtyFlag(true);
    }

    

    
    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
        setStartDate(new Date());
        setDueDate(new Date());
        document.getElementById("note-id").value = Math.random().toString();
        
    };


    useEffect(() => {
        if(notesCtx.itemIndex === null) {
            newNote();
            
     
        } else {
            console.log('itemfound')

            let selectedItem = notesCtx.items[notesCtx.itemIndex];

            document.getElementById("note-title").value = selectedItem.title;
            document.getElementById("note-content").value = selectedItem.content;
            document.getElementById("note-id").value = selectedItem.id;
            setParentItem(selectedItem.parentId);

            setStartDate(selectedItem.startDate);

            setDueDate(selectedItem.dateDue);

            console.log(selectedItem.dateCreated);

            if(selectedItem.type === "") {

                document.getElementById("inlineFormCustomSelect").value = "1";
                setItemType("1");
            } else {
                document.getElementById("inlineFormCustomSelect").value = selectedItem.type;
                setItemType(selectedItem.type);
            }

            
        }

    }, [notesCtx.itemIndex]);

    const setTypeHandler = event => {
        setItemType(event.target.value);
        dirtyFlagHandler();
        
    }

    const setParentHandler = event => {
        setParentItem(event.target.value);
        dirtyFlagHandler();
        
    }

    const setDateHandler = (date, type) => {
        dirtyFlagHandler();
        if(type === "start") {
            setStartDate(date);
        } else {
            setDueDate(date);
            
        }
    }

    const selectProjectDropdown = (type) => {
        
        if(type === "4") {

            // document.getElementById("inlineFormCustomSelectParent").value = parentItem;
            // setParentItem(selectedItem.parentId);

            return(
                
                <Row className="mb-3">
                <Col>
                    <Form.Group >
                        <Form.Label>Parent Item</Form.Label>
                        <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelectParent" value={parentItem} onChange={setParentHandler} >
                            <option readOnly>Choose Project...</option>
                            {projectListHandler(projectList)}   
                        </Form.Control >
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            );
        }
    }

    

    const checkIfEmpty = title => {
        if(title.trim().length === 0) {
            
            return false;
            
        }
        else {
            
            return true;
        }
    }

    const deleteNoteHandler = () => {
        const generatedId = idRef.current.value;

        notesCtx.deleteItem(generatedId);
    };

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredContent = contentRef.current.value;
        const generatedId = idRef.current.value;
        const selectedType = itemType;
        const selectedParentId = parentItem;
        const dateCreated = new Date();
        // const dueDate = dueRef.current.value;


        if((checkIfEmpty(enteredTitle)) && checkDateDifference(getStartDate, dueDate)) {

            setShowAlert(false);
            const enteredText = {
                id: generatedId,
                parentId: selectedParentId, 
                title: enteredTitle, 
                content: enteredContent, 
                dateCreated: dateCreated,
                startDate: getStartDate, 
                dateDue: dueDate, 
                type: selectedType,
                status: '',
            };

            notesCtx.addItem(enteredText);

        } else {
            setShowAlert(true);
            if(!checkIfEmpty(enteredTitle)) {   
                setAlertMessage("Please enter a title.");
            } else {
                setAlertMessage("Due date cannot be set before the start date.")
            }
            

        }


    }

    return (
        <Form  onSubmit={submitHandler} id="note-form">
            <NoteFormDirtyAlert />

            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Button variant="light" onClick={newNote} className="notebutton"><BiFileBlank/> New Note</Button>{' '}
                    {/* <Button variant="light" onClick={editNoteHandler} className="notebutton"><BiEdit/> Edit Note</Button>{' '} */}
                    <Button variant="light" onClick={deleteNoteHandler} className="notebutton"><BiTrash/> Delete Note</Button>{' '}
                    <Button  type="submit" variant="light"  className="notebutton"><BiSave/> Save Note</Button>
                </Col>
            </Row>
            <Row className="mb-3">

                <Form.Group  controlId="note-title">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="input" ref={titleRef} onChange={dirtyFlagHandler} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="item-type">
                        <Form.Label>Item Type</Form.Label>
                        <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelect" ref={typeRef} onChange={setTypeHandler}>
                            <option value>Choose Type...</option>
                            <option value="1">note-reference</option>
                            <option value="2">project</option>
                            <option value="3">idea</option>
                            <option value="4">action</option>
                        </Form.Control >
                        

                    </Form.Group>
                
                </Col>
               

                <Col>
                    <Form.Group controlId="date-Start">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker className="date-dropdown" selected={getStartDate} onChange={((date) => setDateHandler(date, "start"))} />
                    </Form.Group>
                
                </Col>
                <Col>
                    <Form.Group controlId="due-date">
                        <Form.Label>Date Due</Form.Label>
                        <DatePicker className="date-dropdown" selected={dueDate} onChange={((date) => setDateHandler(date, "due"))} />
                    </Form.Group>
                
                </Col>
                <Col>
                <Form.Group  controlId="note-id">
                            <Form.Control type="hidden" ref={idRef} readOnly/>
                        </Form.Group>
                </Col>


            </Row>
            
            {selectProjectDropdown(itemType)}

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="note-content">
                        <Form.Label>Note Content</Form.Label>
                        <Form.Control as="textarea" ref={contentRef} rows={3} onChange={dirtyFlagHandler} />
                    </Form.Group>
                </Col>         
                

            </Row>

            {showAlert && <Alert variant="danger" >{arterMessage}</Alert>}
            
            
            
        </Form>
    );

};

export default NoteForm;