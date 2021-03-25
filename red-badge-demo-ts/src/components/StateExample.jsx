import React, { Component } from "react";

class StateExample extends Component {

  constructor(props){
    super(props);
    this.state = {currentTemp: '78 Degrees'}
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState ({currentTemp: '48 Degrees'});
  }

  render() {
    return (
    <div>Hello the current temp is {this.state.currentTemp}
      <button onClick={this.handleClick} >Click m to change temp</button>
    </div>);
  }
}

export default StateExample;