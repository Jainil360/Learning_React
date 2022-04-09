import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
      this.setState((prevState) => ({
          count : prevState.count + 1
      }));
  };
  render() {
    return (
      <div className="container text-center">
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default counter;

//video : https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11