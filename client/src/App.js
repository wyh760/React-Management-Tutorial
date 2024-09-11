import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3 ,   // marginTop: theme.spacing(3),  // theme.spacing.unit * 3 대신 사용
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }

}) 

// const customers = [
//   {
//     'id': 1,
//     'image': 'https://placeimg.com/64/64/any',
//     'name': 'John Doe',
//     'birtday': '1990-01-01',
//     'gender': 'Male',
//     'job': 'Engineer'
//   },
//   {
//     'id': 2,
//     'image': 'https://placeimg.com/66/65/2',
//     'name': 'wooyonghak',
//     'birtday': '1976-03-21',
//     'gender': 'girl',
//     'job': '자영업자'
//   },
//   {
//     'id': 3,
//     'image': 'https://placeimg.com/66/65/3',
//     'name': 'kimheesun',
//     'birtday': '1977-07-07',
//     'gender': 'girl',
//     'job': '자영업자222'
//   }
// ];

class App extends Component {

  state ={
    customers :""
  }
  componentDidMount(){
    
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  } 

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} =this.props; 
    return (
      <Paper className={classes.root}>
         <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>성함</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { 
              this.state.customers ? this.state.customers.map(c => {  
                return(
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birtday={c.birtday}
                  gender={c.gender}
                  job={c.job}
                />
                )
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
     );
  }
}

export default withStyles(styles)(App); 