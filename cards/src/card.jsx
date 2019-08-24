import React, { Component } from 'react';



class Cards extends Component {
    
    render() { 
        
        return ( 

            <div>

               <div className="card text-center" style={{'max-width':' 18rem'}}>
                <div className="card-header text-white bg-info">
                    {this.props.name}
                </div>

                <div className="card-body">
                    <p className="card-title">{this.props.email}</p>
                    <p className="card-text">{this.props.phone}</p>
                    
                    <a  className="btn btn-info" href="#collapseExample" 
                    role="button">Click to show details</a>
                
                    </div>
           
               </div>
            </div>

         );
    }
}
 
export default Cards;






          