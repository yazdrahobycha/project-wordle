import React, { useState } from "react";

function Input({ guessesArray, setGuessesArray }) {
  const [guess, setGuess] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setGuessesArray([...guessesArray, {value: guess, id: crypto.randomUUID()}])
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleInput}>
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        required
        type="text"
        id="guess-input"
        title="5 charachters required"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;
