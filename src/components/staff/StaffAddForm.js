import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
const url= 'http://5d2be65c8c90070014971e78.mockapi.io/staff'
class StaffAddFrom extends Component{
    constructor(props){
        super(props);
        this.state={
          id: this.generateId(),  
          name: '',
          DOB: '',
          gender: true,
          role: '',
          email: '',
          phone: '',
          description:'',
        }
      }
      addStaff(obj){
        axios.post(url,obj, {
			headers: {
                'content-type': 'application/json',
            }
		}).then(respone => {
			console.log("response dc hay khong");
			console.log(respone);
		}).catch(error => {
			console.log(error);
		});
      }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "gender"){
          value = target.value === 'true' ? true : false;
        }
        this.setState({
          [name] :value
        }, () =>{
            console.log(this.state);
        });
      }
      onSubmit = (event) => {
        event.preventDefault();
        
        const data = {
            "id": this.state.id,
            "staffName": this.state.name,
            "role": this.state.role,
            "DOB": this.state.DOB,
            "staffEmail": this.state.email,
            "gender": this.state.gender,
            "staffPhone": this.state.phone,
            "description": this.state.description,           
        };
        if(!data.staffName){
          alert("Tên nhân viên không được để trống!")
        }else{
          this.addStaff(data);
          alert("Submitted!!!");      
        }
      }
      s4 () {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
      }
      generateId () {
        return this.s4() ;
      }
    render(){
      return(
        <Row>
          <Col xs={12}>
          <Form onSubmit={this.onSubmit}>
            <Form.Label><h4>Thông tin cơ bản </h4></Form.Label>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Tên nhân viên</Form.Label>
                      <Form.Control type="name" name="name" value={this.state.name} placeholder="Nhập tên nhân viên" onChange={this.onChange}/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridDOB">
                          <Form.Label>Ngày sinh</Form.Label>
                          <Form.Control type="date" name="DOB" value={this.state.DOB} placeholder="Nhập ngày sinh" onChange={this.onChange}/>
                      </Form.Group>  

                      <Form.Group as={Col} xs={2} controlId="formGridGender">
                      <Form.Label>Giới tính</Form.Label>
                      <Form.Control as="select" name="gender" value={this.state.gender} onChange={this.onChange}>
                          <option value={true}>Nam</option>
                          <option value={false}>Nữ</option>
                      </Form.Control>
                      </Form.Group>                    
                    </Form.Row>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} xs={12}controlId="formGridAddress">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control type="text" name="role" value={this.state.role} placeholder="Saler" onChange={this.onChange}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="Nhập email nhân viên" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control name="phone" value={this.state.phone} placeholder="Nhập số điện thoại" onChange={this.onChange} />
                        </Form.Group>
                    </Form.Row>
                                                                         
              </Container>                  
            </Col>
            <Col xs={4}> 
              <Container className="add-form">
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows="5" name="description" value={this.state.description} placeholder="Nhập mô tả về khách hàng" onChange={this.onChange}/>
                  </Form.Group>                 
                </Form.Row>                                                   
                </Container> 
              </Col>                     
          </Row>
          <hr className="form-line"/>
          <Button variant="primary" type="submit" className="float-right">
            Lưu thông tin
          </Button>  
        </Form>
        </Col>                
        </Row>
      );
    }
}

export default StaffAddFrom;