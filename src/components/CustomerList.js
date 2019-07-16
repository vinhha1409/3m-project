import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './CustomerListItem';
import {Table,Container } from 'react-bootstrap';

class CustomerList extends Component{
    state ={
        customerList : []
    }
    componentDidMount(){
		axios({
			method: 'get',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/customer'
		}).then(respone => {
			console.log("response dataaaaa");
			console.log(respone.data);
			this.setState({
				customerList: respone.data,
			})
		}).catch(error => {
			console.log(error);
		});
	}
    render(){
		const customerList = this.state.customerList;
		const eleCustomer = customerList.map((customer,index) =>{
			return <CustomerListItem 
						key={customer.id} 
						index={index} 
						customer={customer} />
		})
        return(
			<Container>
				<Table striped bordered hover>
					<thead>
						<tr>
						<th className="text-center">STT</th>
						<th className="text-center">Tên khách hàng</th>
						<th className="text-center">Địa chỉ</th>
						<th className="text-center">Ngày sinh</th>
						<th className="text-center">Email</th>
						<th className="text-center">Điện thoại</th>
						<th className="text-center">Độ ưu tiên</th>
						<th className="text-center">Giới tính</th>
						</tr>
					</thead>
					<tbody> 
						{eleCustomer}          
					</tbody>
			</Table>
        
			</Container>
            )          
    }    
}
export default CustomerList;