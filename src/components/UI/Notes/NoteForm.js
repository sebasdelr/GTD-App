import { useState, useRef, useEffect, useContext } from 'react';


import { Form, Button, Alert, Row, Col} from 'react-bootstrap/';
import { BiFileBlank, BiSave,  BiTrash } from "react-icons/bi";

import './NoteForm.css';

import CaptureContext from '../../../capture/capture-context';

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

const NoteForm = () => {

    

    const notesCtx = useContext(CaptureContext);

    let selectedItem = notesCtx.items[notesCtx.itemIndex];

    const [showAlert, setShowAlert] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [itemType, setItemType] = useState(selectedItem.type);
    const [parentItem, setParentItem] = useState(selectedItem.parentId);

    const titleRef = useRef();
    //usestate instead? useeffect does not rerender!

    const parentRef = useRef();
    
    const contentRef = useRef();
    const idRef = useRef();
    const typeRef = useRef();

    const projectList = notesCtx.items.filter(item => (item.type === "2"));

    

    
    const newNote = () => { 
        //can use ref as well
        document.getElementById("note-form").reset();
        setStartDate(new Date());
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

            setStartDate(selectedItem.dateDue);

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
        
    }

    const setParentHandler = event => {
        setParentItem(event.target.value);
    }

    const selectProjectDropdown = (type) => {
        
        if(type === "4") {

            // document.getElementById("inlineFormCustomSelectParent").value = parentItem;
            // setParentItem(selectedItem.parentId);

            return(
                <Form.Group >
                    <Form.Label>Parent Item</Form.Label>
                    <Form.Control as="select" className="me-sm-2" id="inlineFormCustomSelectParent" value={parentItem} onChange={setParentHandler} >
                        <option readOnly>Choose Project...</option>
                        {projectListHandler(projectList)}   
                    </Form.Control >
                </Form.Group>
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
        // const dueDate = dueRef.current.value;


        if(checkIfEmpty(enteredTitle)) {

            setShowAlert(false);
            const enteredText = {
                id: generatedId,
                parentId: selectedParentId, 
                title: enteredTitle, 
                content: enteredContent, 
                dateCreated: new Date(), 
                dateDue: startDate, 
                type: selectedType,
                status: '',
            };

            notesCtx.addItem(enteredText);

        } else {
            setShowAlert(true);

        }


    }

    return (
        <Form  onSubmit={submitHandler} id="note-form">

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
                    <Form.Control type="input" ref={titleRef} />
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
                        <Form.Group  controlId="note-id">
                            <Form.Control type="hidden" ref={idRef} readOnly/>
                        </Form.Group>

                    </Form.Group>
                
                </Col>

                <Col>
                    <Form.Group controlId="due-date">
                        <Form.Label>Date Due</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>
                
                </Col>


            </Row>
            <Row>
                <Col>
                    {selectProjectDropdown(itemType)}
                </Col>
                <Col></Col>
            </Row>
            <Row>
                           
                <Form.Group className="mb-3" controlId="note-content">
                    <Form.Label>Note Content</Form.Label>
                    <Form.Control as="textarea" ref={contentRef} rows={3} />
                </Form.Group>

            </Row>

            {showAlert && <Alert variant="danger" >Please enter a title.</Alert>}
            
            
            
        </Form>
    );

};

export default NoteForm;