import './App.css';
import React, { Component } from 'react'

import Counter from './react-tutorial-11/Counter';

import Greet from './react-tutorial-12/GreetFun';
import GreetClass from './react-tutorial-12/GreetClass';

import ClickFunc from './react-tutorial-13/ClickFunc';
import ClickClass from './react-tutorial-13/ClickClass';

import ClickBindClass from './react-tutorial-14/ClickBindClass';

import ParentComponent from './react-tutorial-15/ParentComponent';
import UserGreeting from './react-tutorial-16/UserGreeting';

import NameList from './react-tutorial-17/NameList';
import StyleSheet from './react-tutorial-20/StyleSheet';
import InlineStyles from './react-tutorial-20/InlineStyles';
import LifeCycleA from './react-tutorial-22/LifeCycleA';



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
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}

      {/* <NameList/> */}
      {/* <StyleSheet primaryClass={true}/> */}
{/* <InlineStyles/> */}

<LifeCycleA/>
        </div>
    )
  }
}



export default App;
