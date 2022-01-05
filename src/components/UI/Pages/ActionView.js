import ActionList from "../Actions/ActionList";


const ActionView = (props) => {
    return (
       <div>
            

            <ActionList notes={props.notes}/>


       </div>
            

      

        
        
    );
}

export default ActionView;