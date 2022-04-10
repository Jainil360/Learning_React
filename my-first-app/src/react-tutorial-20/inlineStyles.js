import React from 'react'

const headingStyle ={
    color: 'red',
}

function inlineStyles() {
  return (
    <div><h1 style={headingStyle}>Hey</h1></div>
  )
}

export default inlineStyles