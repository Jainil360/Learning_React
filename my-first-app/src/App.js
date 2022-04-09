import './App.css';
import React, { Component } from 'react'

import Counter from './react-tutorial-11/counter';

import Greet from './react-tutorial-12/GreetFun';
import GreetClass from './react-tutorial-12/GreetClass';

import ClickFunc from './react-tutorial-13/clickFunc';
import ClickClass from './react-tutorial-13/clickClass';

import ClickBindClass from './react-tutorial-14/clickBindClass';

import ParentComponent from './react-tutorial-15/ParentComponent';



export class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter/>  */}
        {/* <Greet fname="John"   lname="Patel"/> */}
        {/*<GreetClass fname="Jaynil" lname="Patel" /> */}
        {/* <ClickFunc/> */}
        {/* <ClickClass/> */}
        {/* <ClickBindClass/> */}
        <ParentComponent/>

        </div>
    )
  }
}



export default App;
