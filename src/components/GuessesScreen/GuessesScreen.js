import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessesScreen({ guessesArray }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((arrItem, i) => {
        return <Guess key={i} guessToInsert={guessesArray[i]} />;
      })}
    </div>
  );
}

export default GuessesScreen;
