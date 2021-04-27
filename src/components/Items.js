import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

function Items(props){

    const {list} = props;
    
    return(
        <div className="item-menu">
            <NoteItem title={list[0].title} />
            <NoteItem title={list[1].title}/>
            <NoteItem title={list[2].title}/>
        </div>


    );
}

export default Items;