import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Frame from "./components/Frame";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";

import { StyledApp } from "./components/styled/StyledApp";
import { StyledAppWrapper } from "./components/styled/StyledAppWrapper";
import styled from "styled-components";
import MailForm from "./components/MailForm";
import DesktopNav from "./components/DesktopNav";

const cards = [
  {
    title: "Hello, there",
    description:
      "I am a full stack web developer that loves exploring technology and building useful things. I used to teach high school students, and I also used to travel the US playing music. I've developed strong skills in communication, building teams, and working collaboratively to a common goal. I love learning new things and teaching others about them.",
    liveLink: null,
    codeLink: null
  },
  {
    title: "TCG Portfolio Builder",
    description:
      "This is an inventory app for keeping a personal database of Pokémon trading cards. It includes full authentication with PassportJS for secure and individual collections. Users can search cards from the Pokémon TCG API and add them to leep track of their personal collection. Additionally, users can update market value in real time and create a timeline of each card's value.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    liveLink: "https://card-collector.onrender.com/",
    codeLink: "https://github.com/jessejputnam/card-collector"
  },
  {
    title: "Public Sector Landing Page",
    description:
      "A mock up of a public sector landing page. Written in vanilla JS, HTML, and CSS, the page is accessibility compliant (images with alt tags, all links can be tabbed to, buttons with accessible names, etc). It is fully responsive to all screen sizes, adjusting content dynamically. Uses some JS to allow interactive/animated menu, scroll to top, and search bar.",
    stack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://jessejputnam.github.io/pww-snippet/",
    codeLink: "https://github.com/jessejputnam/pww-snippet"
  },
  {
    title: "Data Visualizer",
    description:
      "This was a small project to begin exploring data visualization with D3.js. Given a set of data, I wanted to create a pop-up modal that showed the important information prominently, and display nested information in a graphical and aesthetic way.",
    stack: ["React", "MaterialUI", "D3.js"],
    liveLink: "https://jessejputnam.github.io/data-visualizer/",
    codeLink: "https://github.com/jessejputnam/data-visualizer"
  },
  {
    title: "Weather or Not",
    description:
      "A weather API consumption app. Uses the OpenWeatherAPI to find local weather data. Three screens show you current conditions, hourly forecast, and daily forecast. A search bar also allows you to search for any city in the world by city. You can specify homonymous cities by including the country.",
    stack: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://jessejputnam.github.io/weather-app/",
    codeLink: "https://github.com/jessejputnam/weather-app"
  },
  {
    title: "Storefront Inventory App",
    description:
      "Full-stack mock inventory app / storefront website for a music store. You can add, update, read, and delete musical instruments to be listed on the store page. It was built using Node, Express, and MongoDB.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    liveLink: "https://string-theory-express.onrender.com/",
    codeLink: "https://github.com/jessejputnam/string-theory-express"
  },
  {
    title: "le Word",
    description:
      "A recreation of the popular word game, Wordle. Click on the digital keyboard to guess the secret 5 letter word. A wrong guess is shaded gray; a correct letter in the wrong place is shaded orange; and a correct letter in the correct place is shaded green. Select the gears to switch between light and dark themes.",
    stack: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://jessejputnam.github.io/wordle-clone/",
    codeLink: "https://github.com/jessejputnam/wordle-clone"
  },
  {
    title: "Battleship",
    description:
      "A single player version of the classic boardgame, Battleship with computer opponent. Choose where to place your own ships, then begin and start clicking on the other board's squares. Misses are shaded gray and hits are shaded red.",
    stack: ["JavaScript", "CSS", "HTML", "Jest", "Webpack"],
    liveLink: "https://jessejputnam.github.io/battleship/",
    codeLink: "https://github.com/jessejputnam/battleship"
  }
];

const StyledMain = styled.main`
  position: relative;
  padding: 50px 20px 10px;
  gap: 50px;
  display: flex;
  justify-content: space-between;
`;

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
