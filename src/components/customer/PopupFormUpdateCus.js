import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import CustomerUpdateForm from './CustomerUpdateForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    const style = (props.open) ? {top: '30px', left: '100px'} : {top: '30px', left: '20px'} 
    return (
      <>
        <Button variant="primary" className="float-right" onClick={() => setShow(true) }>
          Sửa thông tin 
        </Button>
  
        <Modal
          className="modal-form"  
          size="xl"
          style={style}
          show={show}
          onHide={() => setShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="popup-form">
              <h4>Thay đổi thông tin khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerUpdateForm customer={props.customer}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }