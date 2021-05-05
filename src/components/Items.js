import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

function Items(props){

    const {list} = props;
    const selectedTitle = (title) => {
        props.getTitle(title);
    };
    
    return(
        <div className="item-menu">
            {list.map(note => 
                <NoteItem title= {note.title} 
                selectedItem={selectedTitle}
            />)}

        </div>


    );
}

export default Items;