import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessesScreen from "../GuessesScreen/GuessesScreen";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesArray, setGuessesArray] = useState([]);
  return (
    <>
      <GuessesScreen guessesArray={guessesArray} />
      <Input guessesArray={guessesArray} setGuessesArray={setGuessesArray} />
    </>
  );
}

export default Game;
