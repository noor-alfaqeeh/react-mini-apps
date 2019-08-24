import React, { Component } from 'react';
import Todo from './components/todos';
import  'bootstrap/dist/css/bootstrap.css';
import Header from './components/heaer';
import Add from './components/add';
import uuid from 'uuid'



class App extends Component {
  state = { 
    todo:[
        {   id: uuid.v4(),
            title:'Finish react Apps',
            completed: false
        },

        {   id: uuid.v4(),
            title:'Clean my Room',
            completed: false
        },

        {   id: uuid.v4(),
            title:'Dinner',
            completed: false
        }
    ]
 }


markComplete=(id) =>{

  this.setState({ todo: this.state.todo.map(todo1 => {
    if(todo1.id === id) {
      todo1.completed = !todo1.completed
    }
    return todo1;
  }) })

}


delTodo = (id) => {
  this.setState({todo: [...this.state.todo.filter(todo1 => todo1.id!== id)]})
}


add=(title) => {
  const newTodo = {
    id:uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todo:[...this.state.todo,newTodo] })
}


  render() { 
    return ( 
      <div className="container-fluid">
        <Header/>
        <Add add={this.add}/>
        <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />

      </div>

     );
  }
}
 
export default App;
