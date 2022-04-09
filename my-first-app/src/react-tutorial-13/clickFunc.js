import React from 'react'

function btnClick() {
    console.log('Button Clicked');
    alert('Button Clicked');
}

const clickFunc = props => {
    return (
        <div className='container text-center'>
            <button  className="btn btn-primary" onClick={btnClick}>button</button>
        </div>
      )
};

export default clickFunc;
  

