import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
    {
    'id' : 1,
    'image': 'https://placeimg.com/64/64/any',
    'name':'John Doe',        
    'birtday':'1990-01-01',  
    'gender': 'Male' ,         
    'job':'Engineer'       
    },
    {
    'id' : 2,
    'image': 'https://placeimg.com/66/65/2',
    'name':'wooyonghak ',       
    'birtday':'1976-03-21',  
    'gender': 'girl' ,         
    'job':'자영업자'        
    },
    {
      'id' : 3,
      'image': 'https://placeimg.com/66/65/3',
      'name':'kimheesun ',       
      'birtday':'1977-07-07',  
      'gender': 'girl' ,         
      'job':'자영업자222'        
    }
]

class App extends Component {
  render(){
    return (
      <div>
          {
            customers.map( c =>{
                 return(
                    <Customer 
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      birtday={c.birtday}
                      gender={c.gender}
                      job={c.job}
                      />
                 )
            })
          }
      </div>
    );
  }
}

export default App;


      /* <Customer
         id={customers[0].id}
         image={customers[0].image}
         name={customers[0].name}
         birtday= {customers[0].birtday}
         gender={customers[0].gender} 
         job={customers[0].job}
      />
      <Customer
         id={customers[1].id}
         image={customers[1].image}
         name={customers[1].name}
         birtday= {customers[1].birtday}
         gender={customers[1].gender} 
         job={customers[1].job}
      />
      <Customer
         id={customers[2].id}
         image={customers[2].image}
         name={customers[2].name}
         birtday= {customers[2].birtday}
         gender={customers[2].gender} 
         job={customers[2].job}
      />
      </div> */
       

// function App() {
//   return (
//     <Customer/>
//   );
// }

// export default App;