import React from "react";
import Box from "./Box";
import "./Board.css"
const Board = ({board,onClick}) => {
  return (
    <div className="board">
        {board.map((data,idx)=>{
            return <Box value={data} onClick={()=>data=== null && onClick(idx)} />
        })}
      
    </div>
  );
};

export default Board;
