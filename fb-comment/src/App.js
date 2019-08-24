import React, { Component } from 'react';
import Comment from './comment';
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        
      <Comment name="Noor alfaqeeh" comment="I have something to say but I dont want to." />
      
      <Comment name ="rama Naser"  comment="I dont have anything to say." />
      </div>

     );
  }
}
 
export default App;





