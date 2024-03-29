import React, { useContext } from "react";
import { AppContext } from "../App";
import "../styles/GameOver.css"

function GameOver() {
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Win!!!"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Word of the Day: {correctWord.toUpperCase()}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;