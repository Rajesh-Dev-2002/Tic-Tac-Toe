import React from 'react'
import "./ResetBtn.css"
const ResetBtn = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>Reset</button>
  )
}

export default ResetBtn
