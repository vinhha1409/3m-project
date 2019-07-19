import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import TabViewDatil from './TabViewDetail';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PopupFormUpdate from './PopupFormUpdateCus';
class CustomerDetail extends Component{
    state ={
		customerDetail : [],
	}
    componentDidMount(){
		axios({
			method: 'get',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/customer/15'
		}).then(respone => {
            console.log(respone);
			this.setState({
				customerDetail: respone.data,
			})
		}).catch(error => {
			console.log(error);
		});
    }
    deleteCustomer(){
        axios({
			method: 'delete',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/customer/15'
		}).then(respone => {
            console.log(respone+"xóa được chưuaaaaaaaaaaa");
		}).catch(error => {
			console.log(error);
		});
    }
    loadAnother(){
        axios({
            method: 'get',
            url: 'http://5d2be65c8c90070014971e78.mockapi.io/customer/14'
        }).then(respone => {
            console.log(respone);
            this.setState({
                customerDetail: respone.data,
            })
        }).catch(error => {
            console.log(error);
        });
    }
    componentWilllUpdate(nextState){
        this.loadAnother();
    }
    
    onDelete = () =>{
        this.deleteCustomer();
        
    }
    render(){
        const customerDetail = this.state.customerDetail;
        return(
            <div>
                <h1>Thông tin chi tiết khách hàng</h1>
                <Row>
                    <Col xl={8}>
                        <Card className="detail-card-8t" style={{ width: '100%' }}>
                        <Row>
                            <Col xl={6}> 
                                <span> 
                                    <h5 className="debt">{customerDetail.customerName}</h5>
                                </span>
                            </Col>
                            <Col style={{textAlign: 'right'}} xl={6}> 
                                <h5 className="debt">Công nợ hiện tại: 0</h5>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Title style={{marginTop: '30px'}}>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                {customerDetail.description}
                                </Card.Text>                           
                        </Card.Body>
                        </Card>
                        <Card className="detail-card-8b" style={{ width: '100%' }}>
                            <Card.Body>
                                <TabViewDatil customer={customerDetail}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin khách hàng</Card.Title>
                                <Card.Text>
                                    Nhóm khách hàng     :  Bán lẻ
                                    <br/>
                                    Mã khách hàng       :  {customerDetail.id}
                                    <br/>
                                    Nhân viên phụ trách : {customerDetail.staff}
                                    <br/>
                                    Giới tính           : {(customerDetail.gender) ? "Nam" : "Nữ"}
                                    <br/>
                                    Ngày sinh           : {customerDetail.DOB}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Liên hệ</Card.Title>
                                <Card.Text>
                                    Số điện thoại     :  {customerDetail.phoneNumber}
                                    <br/>
                                    Địa chỉ      :  {customerDetail.customerAddress}
                                    <br/>
                                    Email       :  {customerDetail.email}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Ưu đãi</Card.Title>
                                <Card.Text>
                                    Giá mặc định     :  ---
                                    <br/>
                                    Thuế mặc định       :  ---
                                    <br/>
                                    Chiết khấu : ---
                                    <br/>
                                    Phương thức thanh toán           : --- 
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            <hr className="form-line"/>
                <Button variant="danger" className="float-left" onClick={this.onDelete}>Xóa khách hàng</Button>                            
                <PopupFormUpdate open={this.props.open} customer={customerDetail}/>           
            </div>      
        );
    }
}

export default CustomerDetail;