import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import CardList from './cardList';
import Display from './displayArea'


class App extends Component {
  state = {
     persons:[
       {
        id:1,
        name : "Noor Alfaqeeh",
        email : 'noor.alfaqeeh@gmail.com',
        phone : '123456789',
        city :'Amman',
         state :'Extra', 
         country : 'Jordan',  
         organization :'Orange',
         job :'trainer',
          additional :'none'
     },

     {
      id:2,
      name: "lara",
      email: 'lara.alfaqeeh@gmail.com',
      phone: '1232746789',
      city:'Amman',
       state:'Extra', 
       country: 'Jordan',  
       organization:'Company',
       job:'employee',
        additional:'none'
   },

   {
    id:3,
    name: "Samar",
    email: 'Samar.alfaqeeh@gmail.com',
    phone: '12387776789',
    city:'Amman',
     state:'Extra', 
     country: 'Jordan',  
     organization:'office',
     job:'office worker',
      additional:'none'
     }
    ]
   }

   
  render() { 
    return (
      <div>
      <Header/>

      <CardList person={this.state.persons} />

      <Display />
      </div> 

     );
  }
}
 
export default App;

