import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'; // 경로 수정


class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>
                    <img src={this.props.image} alt="profile" style={{ width: '50px', height: '50px' }} />
                </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birtday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}

// class Customer extends React.Component {
//     render() {
//         return (
//            <div>
//               <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
//               <CustomerInfo  birtday={this.props.birtday} gender={this.props.gender}  job={this.props.job} />
//            </div>
//         )
//     }
// }

// class CustomerProfile extends React.Component{
//     render(){
//         return ( 
//            <div>
//                <img src={this.props.image } alt ="profile" />
//                <h2>{this.props.name}({this.props.id})</h2>
//           </div>
//         )
//     }
// } 

// class CustomerInfo extends React.Component{
//     render(){
//         return ( 
//            <div>
//                 <p>{this.props.birtday} </p>
//                 <p>{this.props.gender} </p>
//                 <p>{this.props.job} </p>
//           </div>
//         )
//     }
// } 

export default Customer;