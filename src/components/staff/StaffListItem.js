import React,{Component} from 'react';
class StaffListItem extends Component{
    render(){
        var{staff,index} = this.props;
        return(
            <tr>
                <td>{staff.staffName} </td>
                <td>{staff.role}</td>
                <td>{staff.DOB}</td>
                <td>{staff.staffEmail}</td>
                <td>{staff.staffPhone}</td>
                <td className="text-center">{staff.gender === true ? "Nam" : "Nữ"} </td>
            </tr>             
        );
    }
}

export default StaffListItem;