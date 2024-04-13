import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import Score_Board from "./Components/Score_Board";
import ResetBtn from "./ResetBtn";

function App() {
  // const player = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  const [player, setPlayer] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, SetScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = player.map((data, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return data;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        SetScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        SetScore({ ...score, xScore });
      }
    }
    setPlayer(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setPlayer(Array(9).fill(null));
  };

  return (
    <>
      <Score_Board score={score} xPlaying={xPlaying} />
      <Board board={player} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetBtn resetBoard={resetBoard}/>
    </>
  );
}

export default App;
