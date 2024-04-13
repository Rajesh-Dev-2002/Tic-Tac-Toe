import React from 'react'
import "./Score_Board.css"
const Score_Board = ({score,xPlaying}) => {
    const {xScore,oScore} = score
  return (
    <div className='scoreboard'>
      <span className='`score x-score ${!xPlaying && "inactive"}`'>X - {xScore}</span>
      <span className='`score o-score ${xPlaying && "inactive"}`'>O - {oScore}</span>
    </div>
  )
}

export default Score_Board
