import React from 'react'


function clickBindFunc() {
  return (
    <div className='container text-center'>
        <h1>Hello World</h1>
        <button type="button" className="btn btn-primary" onClick={btnClick}>Click Me</button>
    </div>
  )
}

export default clickBindFunc