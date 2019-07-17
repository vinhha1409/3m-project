import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import CustomerAddForm from './customer/CustomerAddForm';


export default function PopupForm() {
    const [show, setShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" className="float-right" onClick={() => setShow(true) }>
          Thêm khách hàng 
        </Button>
  
        <Modal
          className="modal-form"  
          size="xl"
          show={show}
          onHide={() => setShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="popup-form">
              <h4>Thêm mới khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerAddForm/>
          </Modal.Body>
        </Modal>
      </>
    );
  }