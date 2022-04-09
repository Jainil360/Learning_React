import React, { Component } from 'react'

export default class GreetClass extends Component {
  render() {
    const {fname,lname}    = this.props;

    return (
      <div className='container text-center'>
        <h1>Hello {fname} - Class</h1>
        </div>
    )
  }
}

//ReactJS Tutorial - 12 - Destructuring props and state in body class