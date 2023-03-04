import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Frame from "./components/Frame";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MailForm from "./components/MailForm";
import DesktopNav from "./components/DesktopNav";

import { StyledApp } from "./components/styled/StyledApp";
import { StyledAppWrapper } from "./components/styled/StyledAppWrapper";
import { StyledMain } from "./components/styled/StyledMain";

import { cards } from "./assets/cardsData";

function App() {
  const [theme, setTheme] = useState("dark");
  const [backData, setBackData] = useState(null);
  const [frontData, setFrontData] = useState(cards[0]);
  const [currentSide, setCurrentSide] = useState("front");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  function handleGetDetails(idx: string) {
    setFrontData(cards[+idx]);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledApp theme={theme}>
        <StyledAppWrapper>
          <Frame position='left' />
          <Frame position='right' />

          <Header />

          <StyledMain>
            <div>
              {/* <InfoCard side='back' data={backData} /> */}
              <InfoCard side='front' data={frontData} />
              <MailForm />
            </div>

            <DesktopNav getDetails={handleGetDetails} />
          </StyledMain>
        </StyledAppWrapper>
      </StyledApp>
    </ThemeContext.Provider>
  );
}

export default App;
