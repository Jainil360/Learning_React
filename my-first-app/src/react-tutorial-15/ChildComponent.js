import React from 'react'

function ChildComponent(props) {
  return (
    <div className='container text-center'>
        <h1>Child Component</h1>
        
        <button type="button" className="btn btn-primary" onClick={() => props.greetHandler("child")}>Greet Parent</button>
        
    </div>
  )
}

export default ChildComponent