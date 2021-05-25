import "./Items.css";

import React, { useState } from "react";

// import "./fontawesome-all.min.css";



const NoteItem = (props) => {

    const[isSelected, setSelected] = useState('false');

    //let noteContent = props.content;

    const toggleSelect = () => {
        !isSelected ? setSelected(true) : setSelected(false);
        props.selectedItem(props.title);
        props.selectedItemContent(props.content);
    };

    return(
    <div onClick={toggleSelect} className={` ${isSelected ? 'note-item-selected' : ''} `} >
        <p><span className="icon solid fa-book-open"></span>{props.title}</p>
    </div>


    );


} 

export default NoteItem;