import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col, Modal, Dropdown} from 'react-bootstrap/';
import { BiFileBlank, BiSave,  BiTrash, BiUndo } from "react-icons/bi";

import './NoteForm.css';

import CaptureContext from '../../../capture/capture-context';
import UnsavedContext from '../../../capture/unsaved-context';


import DatePicker from "react-datepicker";
import NoteFormDirtyAlert from './NoteFormDirtyAlert';

import "react-datepicker/dist/react-datepicker.css";

import { HexColorPicker } from "react-colorful";



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
    const flagCtx = useContext(UnsavedContext);

    let selectedItem = notesCtx.items[notesCtx.itemIndex];
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    const [showAlert, setShowAlert] = useState(false);
    const [getStartDate, setStartDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());
    const [itemType, setItemType] = useState("");
    const [parentItem, setParentItem] = useState("");
    const [alertMessage, setAlertMessage] = useState();
    const [originalItem, setOriginalItem] = useState();
    const [color, setColor] = useState("#" + randomColor);

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!
    
    const contentRef = useRef();
    const idRef = useRef();
    const typeRef = useRef();

    const projectList = notesCtx.items.filter(item => (item.type === "2"));

    const dirtyFlagHandler = () => {
        
        flagCtx.setFlag(true);
    }

    

    
    const newNote = () => { 
        //can use ref as well

        if(flagCtx.flag) {
            flagCtx.setShow(true);
        } else {
            document.getElementById("note-form").reset();
            setItemType(1);
            setStartDate(new Date());
            setDueDate(new Date());
            document.getElementById("note-id").value = Math.random().toString();
        }
        
        
    };

    const setBack = () => {
        if(notesCtx.itemIndex === null) {
            newNote();
            
     
        } else {
            

            let selectedItem = notesCtx.items[notesCtx.itemIndex];
            setOriginalItem(selectedItem);

            document.getElementById("note-title").value = selectedItem.title;
            document.getElementById("note-content").value = selectedItem.content;
            document.getElementById("note-id").value = selectedItem.id;
            setParentItem(selectedItem.parentId);

            setStartDate(selectedItem.startDate);

            setDueDate(selectedItem.dateDue);

            setColor(selectedItem.color);


            if(selectedItem.type === "") {

                document.getElementById("inlineFormCustomSelect").value = "1";
                setItemType("1");
            } else {
                document.getElementById("inlineFormCustomSelect").value = selectedItem.type;
                setItemType(selectedItem.type);
            }

            flagCtx.setFlag(false);

            
        }
    }


    useEffect(() => {

        

        let selectedItem = notesCtx.items[notesCtx.itemIndex];
        

        if (typeof(selectedItem) === 'undefined') {
            newNote();
        } else {
            setOriginalItem(selectedItem);

            document.getElementById("note-title").value = selectedItem.title;
            document.getElementById("note-content").value = selectedItem.content;
            document.getElementById("note-id").value = selectedItem.id;
            setParentItem(selectedItem.parentId);

            setStartDate(selectedItem.startDate);

            setDueDate(selectedItem.dateDue);

            setColor(selectedItem.color);


            if(selectedItem.type === "") {

                document.getElementById("inlineFormCustomSelect").value = "1";
                setItemType("1");
            } else {
                document.getElementById("inlineFormCustomSelect").value = selectedItem.type;
                setItemType(selectedItem.type);
            }

        }

            



    }, [notesCtx]);

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

    const setColorHandler = value => {
        setColor(value);
        dirtyFlagHandler();
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

        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if(confirmed) {
            notesCtx.deleteItem(generatedId);
            if(notesCtx.items.length > 1) {
                notesCtx.itemIndex = 0;
                console.log(notesCtx.items.length);
            } else {
                console.log("empty");
                notesCtx.itemIndex = null;
                console.log(notesCtx.itemIndex);
            }
            
        }

        
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

        console.log(notesCtx.items[notesCtx.itemIndex].title);


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
                color: color
            };

            const apiEnteredText = {
                id: generatedId,
                parentId: selectedParentId, 
                title: enteredTitle, 
                content: enteredContent, 
                dateCreated: dateCreated.toISOString().split('T')[0],
                startDate: getStartDate.toISOString().split('T')[0], 
                dateDue: dueDate.toISOString().split('T')[0], 
                type: selectedType,
                status: null,
                reviewed: false,
                color: color

            }

            // response = requests.post(BASE + "tasks", json = {"title": "Joe task", "content": "1000", "dateCreated": "01.04.2017", "startDate": "01.04.2017", "dateDue": "01.04.2017", "type": "2", "status": (None), "reviewed": (False), "color": "#5dcf5e"})
            
            // notesCtx.addItem(enteredText);
            notesCtx.addApiItem(apiEnteredText);
            flagCtx.setFlag(false);

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
            <NoteFormDirtyAlert setFormReset={setBack}/>           

            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Button variant="secondary" onClick={newNote} className="notebutton"><BiFileBlank/> New Note</Button>{' '}
                    {/* <Button variant="light" onClick={editNoteHandler} className="notebutton"><BiEdit/> Edit Note</Button>{' '} */}
                    <Button variant="secondary" onClick={deleteNoteHandler} className="notebutton"><BiTrash/> Delete Note</Button>{' '}
                    <Button variant="secondary" disabled={!flagCtx.flag && "disabled"} onClick={setBack} className="notebutton"><BiUndo/> Undo</Button>{' '}
                    <Button  type="submit" variant="primary" className="notebutton" disabled={!flagCtx.flag && "disabled"}><BiSave/> Save Note</Button>
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
                    <Form.Group controlId="color-select">
                        <Form.Label>Select Color</Form.Label>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic"  style={{
                                background: color                        
                            }}>
                                {color}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <HexColorPicker color={color} onChange={setColorHandler} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                   
                    
                </Col>
                <Col>
                <Form.Group  controlId="note-id">
                            <Form.Control type="" ref={idRef} readOnly/>
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

            {showAlert && <Alert variant="danger" >{alertMessage}</Alert>}
            
            
            
        </Form>
    );

};

export default NoteForm;