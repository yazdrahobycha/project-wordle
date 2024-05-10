import React from "react";

function Banner({ bannerType, answear, numOfGusses }) {
  let message;
  if (bannerType === "happy") {
    message = (
      <p>
        <strong>Congratulations!</strong>Got it in
        <strong>{numOfGusses} guesses</strong>
      </p>
    );
  } else {
    message = (
      <p>
        Sorry, the correct answer is <strong>{answear}</strong>.
      </p>
    );
  }
  return (
    <div className={`${bannerType} banner`}>
      {message}
    </div>
  );
}

export default Banner;
