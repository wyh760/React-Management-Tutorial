import React from 'react';

class Customer extends React.Component {
    render() {
        return (
           <div>
              <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
              <CustomerInfo  birtday={this.props.birtday} gender={this.props.gender}  job={this.props.job} />
           </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return ( 
           <div>
               <img src={this.props.image } alt ="profile" />
               <h2>{this.props.name}({this.props.id})</h2>
          </div>
        )
    }
} 

class CustomerInfo extends React.Component{
    render(){
        return ( 
           <div>
                <p>{this.props.birtday} </p>
                <p>{this.props.gender} </p>
                <p>{this.props.job} </p>
          </div>
        )
    }
} 

export default Customer;