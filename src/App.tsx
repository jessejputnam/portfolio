import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Frame from "./components/Frame";
import Header from "./components/Header";

import { StyledApp } from "./components/styled/StyledApp";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledApp theme={theme}>
        <Frame position='left' />
        <Frame position='right' />
        <Header />
      </StyledApp>
    </ThemeContext.Provider>
  );
}

export default App;
