import React, { Component } from 'react';
import Cards from './card'

class CardList extends Component {
    
    render() { 
        return this.props.persons.map((person) => (
            <Cards person={person} key={person.id}  />
        ));
    }
}
 
export default CardList;

