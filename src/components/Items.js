import "./Items.css";
// import "./fontawesome-all.min.css";
import NoteItem from './NoteItem';

function Items(props){

    const {list} = props;
    const selectedTitle = (title) => {
        props.getTitle(title);
    };

    const selectedContent = (content) => {
        props.getContent(content);
    };
    
    return(
        <div className="item-menu">
            {list.map(note => 
                <NoteItem title= {note.title} 
                selectedItem={selectedTitle}
                content = {note.content}
                selectedItemContent={selectedContent}
            />)}

        </div>


    );
}

export default Items;