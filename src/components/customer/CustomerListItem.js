import React,{Component} from 'react';
class CustomerListItem extends Component{
    render(){
        var{customer,index} = this.props;
        return(
            <tr>
                <td>{customer.customerName} </td>
                <td>{customer.customerAddress}</td>
                <td>{customer.DOB}</td>
                <td>{customer.email}</td>
                <td>{customer.phoneNumber}</td>
                <td className="text-center">{customer.gender === true ? "Nam" : "Nữ"} </td>
            </tr>             
        );
    }
}

export default CustomerListItem;