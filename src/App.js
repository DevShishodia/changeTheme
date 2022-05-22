import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(true);

  const handleClick = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div className={state ? "LigthTheme" : "DarkTheme"}>
      <button onClick={handleClick}>Change Background</button>
    </div>
  );
};

export default App;
