import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import { Frame } from "./components/Frame";

import { StyledApp } from "./components/styled/StyledApp";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <StyledApp theme={theme}>
        <Frame position='left' />
        <Frame position='right' />
        <h1>Jesse Putnam</h1>
        <h2>Web Developer</h2>
      </StyledApp>
    </ThemeContext.Provider>
  );
}

export default App;
