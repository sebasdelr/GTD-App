// import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from '../UI/Notes/NoteItem';

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


function Items(props){

    const {list} = props;
    const selectedTitle = (title) => {
        props.getTitle(title);
    };

    const selectedContent = (content) => {
        props.getContent(content);
    };
    
    return(
        <ListGroup >
            {list.map(note => 
                
                <NoteItem title= {note.title} 
                selectedItem={selectedTitle}
                content = {note.content}
                selectedItemContent={selectedContent}
            />)}

        </ListGroup>


    );
}

export default Items;