import React, { useContext } from "react";
import { AppContext } from "../App";
import "../styles/Key.css";
const classNames = require("classnames");

function Key({ keyVal, bigKey, disabled, almost, correct }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);



  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  let keyClass = classNames({
    key: true,
    disabled: disabled,
    almost: almost,
    big: bigKey,
    correct: correct,
  });

  return (
    <div className={keyClass} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
