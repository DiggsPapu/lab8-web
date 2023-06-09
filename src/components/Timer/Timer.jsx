import React from 'react'
import PropTypes from 'prop-types'
import './Timer.css'

export default function Timer({ time }) {
  return (
    <div className="glowing-circle">
      <h1>TIME LEFT: </h1>
      <h2>{time}</h2>
    </div>
  )
}
Timer.propTypes = {
  time: PropTypes.number.isRequired,
}
