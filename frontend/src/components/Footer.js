import React from 'react'

const divStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#f9f5d2',
  textAlign: 'center'
}

export default function () {
  return (
    <footer style={divStyle}>
    	<p>&copy; David Sabalete</p>
    </footer>
  ); 
}