import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


function ModalWindow({modal, setModal}) {
  return (
    <Modal show={modal} 
            onHide={() => setModal(false)}
            keyboard={true}>
    <Modal.Header >
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setModal(!modal)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalWindow