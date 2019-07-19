import axios from 'axios';
import React, {Component} from 'react'
import StaffListItem from './StaffListItem';
import DropDownCus from './DropDownCus';
import PopupForm from '../PopupForm';
import {Table} from 'react-bootstrap';


class StaffList extends Component{
    state ={
		staffList : [],
		filter:{
			filterName: '',
			filterEmail: '',
			filterPhone:''
		}	
	}
    componentDidMount(){
		axios({
			method: 'get',
			url: 'http://5d2be65c8c90070014971e78.mockapi.io/staff'
		}).then(respone => {
			this.setState({
				staffList: respone.data,
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
		var staffList = this.state.staffList;
		const {filter} = this.state;
		if(filter){			
				staffList = staffList.filter((staff) =>{
				return staff.staffName.toLowerCase().indexOf(filter.filterName) !== -1 && 
						staff.email.toLowerCase().indexOf(filter.filterEmail) !== -1 &&
						staff.staffPhone.indexOf(filter.filterPhone) !== -1 ;					
				});													
		}else{
			return StaffList;
		}
		const eleStaff = StaffList.map((staff,index) =>{
			return <StaffListItem 
						key={staff.id} 
						index={index} 
						staff={staff} />
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
							{eleStaff}          
						</tbody>
					</Table>
				</div>	
			</div>
	
            )          
    }    
}
export default StaffList;