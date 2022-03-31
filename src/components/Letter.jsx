import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "../styles/Letter.css";
const classNames = require("classnames");

function Letter({ letterPos, attemptVal }) {
  const {
    board,
    setDisabledLetters,
    currAttempt,
    correctWord,
    setAlmostLetters,
    setCorrectLetters,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  let letterClass = classNames({
    letter: true,
    emptyLetter: !letter,
    typedLetter: letter,
    correct: letterState === "correct",
    almost: letterState === "almost",
    error: letterState === "error",
  });

  useEffect(() => {
    if (currAttempt.attempt > attemptVal) {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter]);
      } else if (letter !== "" && almost && !correct) {
        setAlmostLetters((prev) => [...prev, letter]);
      } else if (letter !== "" && !almost && correct) {
        setCorrectLetters((prev) => [...prev, letter]);
      }
    }
  }, [
    currAttempt.attempt,
    setAlmostLetters,
    setCorrectLetters,
    setDisabledLetters,
    almost,
    correct,
    letter,
    attemptVal,
  ]);
  return (
    <div className={letterClass} id={`${letterPos}${attemptVal}`}>
      {letter}
    </div>
  );
}

export default Letter;
