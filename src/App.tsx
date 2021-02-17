import { useState } from "react";

/**
 * Key takeaway: children can have their own independent state
 */

function App() {
  const [typed, setTyped] = useState("");

  /**
   * A higher-order function - returns a function
   */
  const makeHandlerToAppend = (input: number | string) => {
    // adds input to previous state with update function
    return () => setTyped((prevState) => `${prevState}${input}`);
  };

  const handleBackspace = () => {
    setTyped((prevState) => {
      const newLength = prevState.length - 1;
      return prevState.substr(0, newLength);
    });
  };

  const numRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numRow.map((key) => (
    <button onClick={makeHandlerToAppend(key)}>{key}</button>
  ));

  return (
    <div>
      <h1>Mini keyboard</h1>
      <p>Typed: {setTyped}</p>
      <div>{numberButtons}</div>
      <div>
        <button onClick={makeHandlerToAppend("q")}>Q</button>
        <button onClick={makeHandlerToAppend("w")}>W</button>
        <button onClick={makeHandlerToAppend("e")}>E</button>
        <button onClick={makeHandlerToAppend("r")}>R</button>
        <button onClick={makeHandlerToAppend("t")}>T</button>
        <button onClick={makeHandlerToAppend("y")}>Y</button>
        <button onClick={makeHandlerToAppend("u")}>U</button>
        <button onClick={makeHandlerToAppend("i")}>I</button>
        <button onClick={makeHandlerToAppend("o")}>O</button>
        <button onClick={makeHandlerToAppend("p")}>P</button>
      </div>
      <hr />
      <button onClick={handleBackspace}>Backspace</button>
    </div>
  );
}

export default App;
