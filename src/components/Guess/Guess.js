import React from "react";
import { range } from "../../utils";

function Guess({ guessToInsert }) {
  return (
    <p className="guess">
      {range(5).map((arrItem, i) => {
        return (
          <span key={i} className="cell">
            {guessToInsert ? guessToInsert.value[i] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
