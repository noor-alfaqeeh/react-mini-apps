import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container text-center">
                <nav className="navbar navbar-dark bg-dark  mb-3" >
                <a className="navbar-brand " href="1" ><h3>Counter</h3></a>
                </nav>
            </div>
         );
    }
}
 
export default Header;