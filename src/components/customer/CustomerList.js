import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './CustomerListItem';
import DropDownCus from './DropDownCus';
import {Table} from 'react-bootstrap';

class CustomerList extends Component{
    state ={
		customerList : [],
		filterName: ''
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
	onFilter = (filterName1) =>{
		console.log(filterName1);
		this.setState({
			filterName: filterName1.toLowerCase()
		},()=>{
			console.log(this.state);
		})
	}
    render(){
		var customerList = this.state.customerList;
		const filter = this.state.filterName;
		console.log(filter+"ở sauu đóooo");
		if(filter){
			customerList = customerList.filter((customer) =>{
				return customer.customerName.toLowerCase().indexOf(filter) !== -1;
			});
		}
		const eleCustomer = customerList.map((customer,index) =>{
			return <CustomerListItem 
						key={customer.id} 
						index={index} 
						customer={customer} />
		})
        return(
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<DropDownCus onFilter={this.onFilter}/>			
					<Table responsive  hover>
						<thead>
							<tr>
							<th className="text-center">Tên khách hàng</th>
							<th className="text-center">Địa chỉ</th>
							<th className="text-center">Ngày sinh</th>
							<th className="text-center">Email</th>
							<th className="text-center">Điện thoại</th>
							<th className="text-center">Giới tính</th>
							</tr>
						</thead>
						<tbody> 
							{eleCustomer}          
						</tbody>
					</Table>
				</div>	
			</div>
	
            )          
    }    
}
export default CustomerList;