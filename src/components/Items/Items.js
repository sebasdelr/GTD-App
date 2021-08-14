// import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from '../UI/Notes/NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Items(props){

    const {list} = props;
    const selectedItem = (item) => {
        props.selectedItem(item);
    };

    const selectedContent = (id) => {
        props.getContent(id);
    };

    const selectedId = (id) => {
        props.onDeleteItem(id);
    };
    
    return(
        <ListGroup >
            {list.map(note => 
                
                <NoteItem

                listItem={note}
                // title={note.title} 
                selectedItem={selectedItem}
                // content = {note.content}
                // selectedItemContent={selectedContent}
                deleteItem={selectedId}
                //add on click here to delete?
            />)}

        </ListGroup>


    );
}

export default Items;