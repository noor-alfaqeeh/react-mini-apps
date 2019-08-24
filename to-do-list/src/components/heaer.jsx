import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div align='center'>
                <nav className="navbar navbar-dark bg-dark  mb-3 text-center " >
                <a className="navbar-brand " href="1" ><h3>To-Do List</h3></a>
                </nav>
            </div>
         );
    }
}
 
export default Header;