import ActionList from "../Actions/ActionList";


const ActionView = (props) => {
    return (
       <div>
            <h1>Next Actions</h1>

            <ActionList notes={props.notes}/>


       </div>
            

      

        
        
    );
}

export default ActionView;