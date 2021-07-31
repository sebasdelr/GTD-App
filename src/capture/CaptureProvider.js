import CaptureContext from './capture-context';

const CaptureProvider = props => {

    return(
        <CaptureContext.Provider>
            {props.children}
        </CaptureContext.Provider>
    );

}

export default CaptureProvider;