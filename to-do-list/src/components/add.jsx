import React, { Component } from 'react';

class Add extends Component {
    state = { 
        title:''
     }



     onChange =(e) => {
        this.setState({title: e.target.value});
     }

     onSubmit = (e) => {
         e.preventDefault();
         this.props.add(this.state.title)

     }



    render() { 
        return ( 

            <form onSubmit={this.onSubmit} className="mx-2 my-auto d-inline w-100 mb-2">
                <input className="form-control border mr-sm-2" 
                type="text" 
                placeholder="Add To-Do List ..." 
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                />
                
             </form>


         );
    }
}
 
export default Add;