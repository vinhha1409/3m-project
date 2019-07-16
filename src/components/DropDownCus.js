import React, {Component} from 'react';
import {InputGroup,Dropdown,DropdownButton,FormControl} from 'react-bootstrap';
class DropDownCus extends Component{
    render(){
        return(
        <InputGroup className="mb-3">           
            <FormControl aria-describedby="basic-addon1" placeholder="Nhập tên khách hàng..."/>
        </InputGroup>

        );
    }
}

export default DropDownCus;