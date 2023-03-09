import styled from "styled-components";

export const StyledMailForm = styled.div<{ open: boolean; theme: string }>`
  font-size: 1.3rem;
  color: #000000b3;
  background-color: ${(props) =>
    props.theme === "dark"
      ? "var(--text-shadow-light)"
      : "var(--text-shadow-dark)"};

  display: flex;
  justify-content: center;
  z-index: 10;
  width: 350px;
  height: ${(props) => (props.open ? "450px" : "1px")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  overflow-y: hidden;

  position: absolute;
  right: 25px;
  top: 147px;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;

  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition-delay: 0s, ${(props) => (props.open ? "0s" : ".2s")};

  @media only screen and (max-width: 600px) {
    width: 100%;
    right: 0;
    top: 73px;
    border-radius: 0;
  }

  && .success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  && .success > * {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-light)"
        : "var(--background-dark)"};
  }

  && form {
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
  }

  && .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  && label {
    font-weight: 600;
    color: ${(props) => (props.theme === "light" ? "white" : "black")};
    transition: color 0.3s;
    margin-left: 10px;
  }

  && div.comments {
    flex-direction: column;
    gap: 5px;
  }

  && input {
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#000000b3"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-dark)"
        : "var(--background-light)"};
    box-shadow: 0 0 3px 1px var(--text-shadow-dark);
    border-radius: 5px;
    border: none;
    padding: 8px 10px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    transition: color 0.3s, background-color 0.3s;
  }

  && textarea {
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#000000b3"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-dark)"
        : "var(--background-light)"};
    padding: 10px 10px;
    letter-spacing: 0.05ch;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    height: 200px;
    resize: none;
    border: none;
    box-shadow: 0 0 3px 1px var(--text-shadow-dark);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    transition: color 0.3s, background-color 0.3s;
  }

  && .btns-container {
    display: flex;
    gap: 20px;
  }

  && button {
    transition: filter 0.2s;
    color: black;
    width: 100px;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 3px 0px var(--text-shadow-dark);
    background-color: ${(props) =>
      props.theme === "dark"
        ? "var(--button-blue)"
        : "var(--background-light)"};
  }

  @media (hover: hover) {
    && button:hover {
      filter: brightness(150%);
    }
  }
`;
