import React from 'react'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt} />
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Navbar