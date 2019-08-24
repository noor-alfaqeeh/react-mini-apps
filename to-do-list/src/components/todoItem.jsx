import React, { Component } from 'react';


class Item extends Component {
  
    render() { 

        const{id , title}= this.props.todo1

        return ( 
            <div className= "card text-white bg-info mb-2" >
                 <div className="card-body">
                <p className="card-text">
                    <input type="checkbox" onClick={this.props.markComplete.bind(this,id)} /> {" "}
                {title}
                <button type="button" className="close btn-primary " onClick={this.props.delTodo.bind(this,id)} >
                       &times;
                 </button>
                </p>
                </div>
            </div>
         );
    }
}
 
export default Item;




//<div class="card text-white bg-info mb-3" style="max-width: 18rem;">




