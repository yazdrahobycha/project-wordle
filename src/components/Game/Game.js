import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessesScreen from "../GuessesScreen/GuessesScreen";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesArray, setGuessesArray] = useState([]);
  const [bannerStatus, setBannerStatus] = useState({ showBanner: false });

  function handleInput(guess) {
    const guessChecked = checkGuess(guess, answer);
    const newGuessesArray = [...guessesArray, guessChecked];
    setGuessesArray(newGuessesArray);
    if (guess === answer) {
      setBannerStatus({ showBanner: true, bannerType: "happy" });
    } else if (newGuessesArray.length === 6) {
      setBannerStatus({ showBanner: true, bannerType: "sad" });
    }
  }

  return (
    <>
      {bannerStatus.showBanner && (
        <Banner
          bannerType={bannerStatus.bannerType}
          answear={answer}
          numOfGusses={guessesArray.length}
        />
      )}
      <GuessesScreen guessesArray={guessesArray} />
      <Input answer={answer} handleInput={handleInput} />
    </>
  );
}

export default Game;
