import React, { Component } from 'react';
import Item from './todoItem'


class Todo extends Component {

  
    render() { 
        return this.props.todo.map((todo1)=> (
           <Item todo1={todo1} key={todo1.id} markComplete={this.props.markComplete}
           delTodo={this.props.delTodo} />
        ));
    }
}
 
export default Todo;