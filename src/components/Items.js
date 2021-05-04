import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

function Items(props){

    const {list} = props;
    
    return(
        <div className="item-menu">
            {list.map(note => 
                <NoteItem title= {note.title} 
            />)}

        </div>


    );
}

export default Items;