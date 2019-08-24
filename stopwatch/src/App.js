import React, { Component } from 'react';
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  state = { 
    timerStarted: false,
    timerStopped: true,
    hours:0,
    minutes:0,
    seconds:0
   }
   

   handleTimerStart= (e)=> {
     e.preventDefault();
     

     if(this.state.timerStopped){
     this.timer=setInterval(() => {
       
         this.setState({timerStarted:true, timerStopped:false});
         
         if(this.state.timerStarted){
           if(this.state.seconds>= 60) {
            this.setState( (prevState) => ({ minutes: prevState.minutes +1 , seconds: 0 }))
           }
           if(this.state.minutes>= 60){
            this.setState( (prevState) => ({ hours: prevState.hours +1 ,minutes:0 , seconds: 0 }))
           }
           this.setState( (prevState) => ({ seconds: prevState.seconds +1 }))
         }
      
     }, 1000);
    }
   }


   handleTimerStop =(e) => {
    e.preventDefault();

    this.setState({timerStarted: false, timerStopped: true})
    clearInterval(this.timer)

   }


   handleTimerReset=() =>
   {
     this.setState({
       timerStarted:false,
       timerStopped: true,
       seconds: 0,
       minutes: 0,
       hours: 0
     })
     clearInterval(this.timer)
   }




  render() { 
    return ( 
      <div className="container text-center">
        <Header/>
        
          <div className='current-timer'>
           <h1> {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}</h1>

          </div>
          <div className='timer-controls'>
          <button type="button" className="btn btn-success mr-4" onClick={this.handleTimerStart.bind(this)}>Start</button>
          <button type="button" className="btn btn-secondary mr-4" onClick={this.handleTimerStop.bind(this)} >Stop</button>
          <button type="button" className="btn btn-danger" onClick={this.handleTimerReset.bind(this)} >Reset</button>

          </div>

        
     </div>

     );
  }
}
 
export default App;





