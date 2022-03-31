import React, { useCallback, useEffect, useContext} from "react";
import Key from "./Key";
import { AppContext } from "../App";
import "../styles/Keyboard.css";

const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

function Keyboard() {

  const {
    disabledLetters,
    almostLetters,
    correctLetters,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [gameOver, onDelete, onEnter, onSelectLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              almost={almostLetters.includes(key)}
              correct={correctLetters.includes(key)}
              key={key}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              almost={almostLetters.includes(key)}
              correct={correctLetters.includes(key)}
              key={key}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return (
            <Key
              keyVal={key}
              disabled={disabledLetters.includes(key)}
              almost={almostLetters.includes(key)}
              correct={correctLetters.includes(key)}
              key={key}
            />
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
