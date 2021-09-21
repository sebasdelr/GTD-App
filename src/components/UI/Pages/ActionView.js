import ActionList from "../Actions/ActionList";

const ActionView = (props) => {
    return (
        <ActionList notes={props.notes}/>
    );
}

export default ActionView;