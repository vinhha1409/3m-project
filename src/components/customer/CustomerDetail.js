import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import TabViewDatil from '../TabViewDetail';
import { Button } from 'react-bootstrap';
class CustomerDetail extends Component{
    render(){
        return(
            <div>
                <h1>Thông tin chi tiết khách hàng</h1>
                <Row>
                    <Col xl={8}>
                        <Card className="detail-card-8t" style={{ width: '100%' }}>
                        <Row>
                            <Col xl={6}> 
                                <span> 
                                    <h5 className="debt">Phan Linh</h5>
                                </span>
                            </Col>
                            <Col style={{textAlign: 'right'}} xl={6}> 
                                <h5 className="debt">Công nợ hiện tại: 0</h5>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Title style={{marginTop: '30px'}}>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Card.Text>                           
                        </Card.Body>
                        </Card>
                        <Card className="detail-card-8b" style={{ width: '100%' }}>
                            <Card.Body>
                                <TabViewDatil />
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
                                    Mã khách hàng       :  ---
                                    <br/>
                                    Nhân viên phụ trách : Phan Linh
                                    <br/>
                                    Giới tính           : Nữ 
                                    <br/>
                                    Ngày sinh           : 12/8/1998
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Liên hệ</Card.Title>
                                <Card.Text>
                                    Số điện thoại     :  0987654321
                                    <br/>
                                    Email       :  something@gmail.com
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
                <Button variant="danger" className="float-left">Xóa khách hàng</Button>                            
                <Button variant="primary" className="float-right">Sửa thông tin</Button>           
            </div>      
        );
    }
}

export default CustomerDetail;