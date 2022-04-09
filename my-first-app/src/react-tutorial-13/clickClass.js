import React, { Component } from 'react'



class clickClass extends Component {
    btnClick = () => {
        console.log('Button Clicked');
        alert('Button Clicked');
    }
  render() {
    return (
      <div className='container text-center'>
          <button type="button" className="btn btn-primary" onClick={this.btnClick}>button</button>
      </div>
    )
  }
}

export default clickClass