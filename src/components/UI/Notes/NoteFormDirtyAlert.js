import { useContext } from 'react';


import { Button, Modal} from 'react-bootstrap/';

import UnsavedContext from '../../../capture/unsaved-context';


function NoteFormDirtyAlert(props) {

    const flagCtx = useContext(UnsavedContext);

    const handleClose = () => flagCtx.setShow(false);

    const handleReset = () => {
      flagCtx.setShow(false);
      flagCtx.setRevert(true);
      // props.setFormReset();
    
    };
    
  
    return (
      <>
        <Modal show={flagCtx.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Unsaved Changes</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have unsaved changes. Click on Ok to proceed. Click on Cancel to resume editing.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleReset}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NoteFormDirtyAlert;