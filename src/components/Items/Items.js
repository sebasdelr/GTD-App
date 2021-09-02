// import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from '../UI/Notes/NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Items(props){

    const {list} = props;

    const listHandler = list => {
        if(list.length > 0) {
            return (
                list.map(note => 
                
                    <NoteItem key={note.id}
    
                    listItem={note}
                    // title={note.title} 
                    selectedItem={selectedItem}
                    // content = {note.content}
                    // selectedItemContent={selectedContent}
                    deleteItem={selectedId}
                    //add on click here to delete?
                />)
            );
        } else {
            return (
                <p>No Items Found</p>
            );

        }
    }

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
            {listHandler(list)}

        </ListGroup>


    );
}

export default Items;