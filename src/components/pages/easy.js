import React, { useState } from "react";
import "../../App.css";
import { createContext } from "react";
import Board from "../board";
import { initialEasyBoard, solutionWordReducer } from "../solution-word";
import * as gameState from "../game-state";

export const EasyContext = createContext();

export default function Easy() {
  const [board, setBoard] = useState(initialEasyBoard);
  const [numAttempt, setNumAttempt] = useState(gameState.guessAttempts);
  const [letterHints, setLetterHints] = useState({});
  const level = "easy";

  // const [solutionWord, setSolutionWord] = useState(solution);

  return (
    <>
      <EasyContext.Provider
        value={{
          board,
          setBoard,
          numAttempt,
          setNumAttempt,
          letterHints,
          setLetterHints,
          level,
        }}
      >
        <Board />
      </EasyContext.Provider>
    </>
  );
}
