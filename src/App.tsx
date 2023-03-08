import { useState, useEffect } from "react";
import { Context } from "./contexts";

import Frame from "./components/Frame";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import MailForm from "./components/MailForm";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

import { StyledApp } from "./components/styled/StyledApp";
import { StyledAppWrapper } from "./components/styled/StyledAppWrapper";
import { StyledMain } from "./components/styled/StyledMain";

import { cards } from "./assets/cardsData";

function App() {
  const [theme, setTheme] = useState("dark");
  const [openModal, setOpenModal] = useState(false);
  const [frontData, setFrontData] = useState(cards[0]);
  const [backData, setBackData] = useState(cards[8]);
  const [currentSide, setCurrentSide] = useState("front");
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleOpenModal = () => setOpenModal(!openModal);

  function handleGetDetails(idx: string) {
    if (currentSide === "front") {
      if (frontData.id == +idx) return;
      setBackData(cards[+idx]);
      setCurrentSide("back");
    } else {
      if (backData.id == +idx) return;
      setFrontData(cards[+idx]);
      setCurrentSide("front");
    }
  }

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        openModal,
        toggleOpenModal
      }}
    >
      <StyledApp theme={theme}>
        <StyledAppWrapper>
          <Frame position='left' />
          <Frame position='right' />

          <Header />
          <MailForm />

          <StyledMain>
            <MobileNav getDetails={handleGetDetails} />

            <div>
              <InfoCard
                side='back'
                currentSide={currentSide}
                data={backData}
                isLoaded={isLoaded}
              />
              <InfoCard
                side='front'
                currentSide={currentSide}
                data={frontData}
                isLoaded={isLoaded}
              />
            </div>

            <DesktopNav getDetails={handleGetDetails} />
          </StyledMain>
        </StyledAppWrapper>
      </StyledApp>
    </Context.Provider>
  );
}

export default App;
