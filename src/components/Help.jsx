import React, { useState } from "react";
import "../styles/Help.css";
import classNames from "classnames";
import correct_spot from "../assets/img/correct-spot.jpg"
import wrong_spot from "../assets/img/wrong-spot.JPG"
import no_spot from "../assets/img/no-spot.JPG"

const Help = () => {
  const [visibleInstructions, setVisibleInstructions] = useState(false);
  const toggleInstructions = () => setVisibleInstructions(!visibleInstructions);
  let instructionsClass = classNames({
    instructions: true,
    visible: visibleInstructions,
  });
  return (
    <>
      <div className="help" onClick={toggleInstructions}>
        ?
      </div>
      <div className={instructionsClass}>
        <div className="closeInst" onClick={toggleInstructions}>X</div>
        <div className="howto">
          <p>How to play</p>
          <p>Guess the WORDLE in six tries.</p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
          </p>
          <p>Examples</p>
          <img src={correct_spot} alt="correct spot" />
          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
          <img src={wrong_spot} alt="wrong spot" />
          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
          <img src={no_spot} alt="no spot" />
          <p>The letter <strong>U</strong> is not in the word in any spot.</p>
          <p>code with ❤ by <a href="https://www.gusgluna.com">gusgluna</a></p>
        </div>
      </div>
    </>
  );
};

export default Help;
