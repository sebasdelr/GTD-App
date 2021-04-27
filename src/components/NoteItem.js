import "./Items.css";

// import "./fontawesome-all.min.css";



const NoteItem = (props) => {

    return(
    <div className='note-item-title'>
        <p><span className="icon solid fa-book-open"></span>{props.title}</p>
    </div>


    );


} 

export default NoteItem;