import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './CustomerListItem';
import DropDownCus from './DropDownCus';
import PopupForm from './PopupFormCus';
import {Table} from 'react-bootstrap';


class CustomerList extends Component{
    state ={
		customerList : [],
		filter:{
			filterName: '',
			filterEmail: '',
			filterPhone:''
		}	
	}
    componentDidMount(){
		axios({
			method: 'get',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/customer'
		}).then(respone => {
			this.setState({
				customerList: respone.data,
			})
		}).catch(error => {
			console.log(error);
		});
	}
	onFilter = (filterName1,filterEmail1,filterPhone1) =>{
		if(!filterName1 && !filterEmail1 && !filterPhone1){
			this.setState({
				filter:{
					filterName: '',
					filterEmail: '',
					filterPhone: ''
				}
			},()=>{
				console.log(this.state);
			})
		}else{
			this.setState({
				filter:{
					filterName: (filterName1) ? 	filterName1.toLowerCase() : this.state.filter.filterName,	
					filterEmail: (filterEmail1) ? 	filterEmail1.toLowerCase() : this.state.filter.filterEmail,
					filterPhone: (filterPhone1) ? filterPhone1 : this.state.filter.filterPhone
				}					
			},()=>{
				console.log(this.state);
			})
		}
	}
    render(){
		var customerList = this.state.customerList;
		const {filter} = this.state;
		if(filter){			
				customerList = customerList.filter((customer) =>{
				return customer.customerName.toLowerCase().indexOf(filter.filterName) !== -1 && 
						customer.email.toLowerCase().indexOf(filter.filterEmail) !== -1 &&
						customer.phoneNumber.indexOf(filter.filterPhone) !== -1 ;					
				});													
		}else{
			return customerList;
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
					<div className="row">
						<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
							<DropDownCus onFilter ={this.onFilter }/>
						</div>
						<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<PopupForm open={this.props.open}/>
						</div>
					</div>												
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