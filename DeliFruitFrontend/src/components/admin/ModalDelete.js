import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDelete = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this item: {props.dataModal.name}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    <Button variant="primary" onClick={props.confirmDeleteItem}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete