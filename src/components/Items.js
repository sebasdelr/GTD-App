import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

function Items(){
    
    return(
        <div className="item-menu">
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </div>


    );
}

export default Items;