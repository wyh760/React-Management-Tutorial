import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@mui/material/CircularProgress';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3 ,   // marginTop: theme.spacing(3),  // theme.spacing.unit * 3 대신 사용
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  },

}) 


class App extends Component {

  state ={
      customers: '',
      completed: 0,
      searchKeyword: ''
  }

  componentDidMount(){
    
    this.timer = setInterval(this.progress, 20);

    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  } 

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
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
              }) : 
              <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
     );
  }
}

export default withStyles(styles)(App); 