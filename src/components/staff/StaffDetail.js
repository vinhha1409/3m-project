import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import TabViewDatil from '../TabViewDetail';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PopupFormUpdate from '../PopupFormUpdate';
class StaffDetail extends Component{
    state ={
		staffDetail : [],
	}
    componentDidMount(){
		axios({
			method: 'get',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/staff/15'
		}).then(respone => {
            console.log(respone);
			this.setState({
				staffDetail: respone.data,
			})
		}).catch(error => {
			console.log(error);
		});
    }
    deleteStaff(){
        axios({
			method: 'delete',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/staff/15'
		}).then(respone => {
            console.log(respone+"xóa được chưuaaaaaaaaaaa");
		}).catch(error => {
			console.log(error);
		});
    }   
    onDelete = () =>{
        this.deleteStaff();
        
    }
    render(){
        const staffDetail = this.state.staffDetail;
        return(
            <div>
                <h1>Thông tin chi tiết nhân viên</h1>
                <Row>
                    <Col xl={8}>
                        <Card className="detail-card-8t" style={{ width: '100%' }}>
                        <Row>
                            <span> 
                                <h5 className="debt">{staffDetail.staffName}</h5>
                            </span>
                        </Row>
                        <Card.Body>
                            <Card.Title style={{marginTop: '30px'}}>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                {staffDetail.description}
                                </Card.Text>                           
                        </Card.Body>
                        </Card>                       
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin nhân viên</Card.Title>
                                <Card.Text>
                                    Mã nhân viên      :  {staffDetail.id}
                                    <br/>                                    
                                    Giới tính           : {(staffDetail.gender) ? "Nam" : "Nữ"}
                                    <br/>
                                    Ngày sinh           : {staffDetail.DOB}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Liên hệ</Card.Title>
                                <Card.Text>
                                    Số điện thoại     :  {staffDetail.staffPhone}
                                    <br/>
                                    Địa chỉ      :  {staffDetail.staffAddress}
                                    <br/>
                                    Email       :  {staffDetail.staffEmail}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>                        
                    </Col>
                </Row>
            <hr className="form-line"/>
                <Button variant="danger" className="float-left" onClick={this.onDelete}>Xóa nhân viên</Button>                            
                <PopupFormUpdate open={this.props.open} staff={staffDetail}/>           
            </div>      
        );
    }
}

export default StaffDetail;