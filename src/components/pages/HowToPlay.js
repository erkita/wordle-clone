import React from "react";
import "../../App.css";
import rules from "../../images/rules.png";

export default function HowToPlay() {
  return (
    <>
      <div>
        <img src={rules} alt="Wordle rules" className="game-rules"></img>
      </div>
    </>
  );
}
