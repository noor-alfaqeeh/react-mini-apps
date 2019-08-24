import React from 'react';


const Display = props => {

    
    return (
        <div>



            <div className="card text-center" style={{'max-width':' 18rem'}}>
            <div className="card-header text-white bg-info">
                {props.name}
            </div>
            <div className="card-body">
                 <p className="card-title">Name:{props.name}</p>
                <p className="card-title">Email: {props.email}</p>
                <p className="card-text">Phone Number:{props.phone}</p>
                <p className="card-text">City: {props.city}</p>
                <p className="card-text">State: {props.state}</p>
                <p className="card-text">Country: {props.country}</p>
                <p className="card-text">Organization: {props.organization}</p>
                <p className="card-text">Job : {props.job} </p>
                <p className="card-text">Additional: {props.additional}</p>
             
            </div>

            </div>

            
            </div>
   
        

    )

}

export default Display;