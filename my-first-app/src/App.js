import './App.css';
import Counter from './react-tutorial-11/counter';
import Greet from './react-tutorial-12/GreetFun';
import GreetClass from './react-tutorial-12/GreetClass';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter/>  */}
        <Greet fname="John"   lname="Patel"/>
        <GreetClass fname="Jaynil" lname="Patel" />
        </div>
    )
  }
}



export default App;
