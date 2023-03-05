import { useContext, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import { MailFormProps } from "../types";
import styled from "styled-components";
import { Context } from "../contexts";

const StyledMailForm = styled.div<{ open: boolean; theme: string }>`
  font-size: 1.3rem;
  color: #000000b3;
  background: var(--faded-blue);

  display: flex;
  justify-content: center;
  z-index: 5;
  width: 350px;
  height: ${(props) => (props.open ? "400px" : "0px")};
  box-shadow: ${(props) =>
    props.open
      ? "1px 2px 1px 0px var(--text-shadow-dark)"
      : "0 0 3px 1px var(--transparent)"};
  overflow-y: hidden;

  position: absolute;
  right: 25px;
  top: 150px;

  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;

  transition: height 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

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
    width: 100%;
    justify-content: space-around;
  }

  && label {
    font-weight: 600;
    color: ${(props) =>
      props.theme === "light"
        ? "var(--text-shadow-dark)"
        : "var(--text-shadow-light)"};
    transition: color 0.3s;
  }

  && div.comments {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  && input {
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#000000b3"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--text-shadow-dark)"
        : "var(--text-shadow-light)"};
    box-shadow: 0 0 3px 1px var(--text-shadow-dark);
    border-radius: 5px;
    width: 200px;
    border: none;
    padding: 3px 8px;
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    transition: color 0.3s, background-color 0.3s;
  }

  && textarea {
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "#000000b3"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--text-shadow-dark)"
        : "var(--text-shadow-light)"};
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
`;

export default function MailForm() {
  const { theme, openModal, toggleOpenModal } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!openModal) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [openModal]);

  return (
    <StyledMailForm open={openModal} theme={theme}>
      <form
        action='mailto:jessejputnam@gmail.com'
        method='get'
        encType='text/plain'
      >
        <div className='input-container'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='input-container'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='input-container comments'>
          <label>Comments:</label>
          <textarea
            name='comments'
            placeholder='Send me a message!'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <button type='submit' name='submit'>
            Send
          </button>
          <button type='button' name='cancel' onClick={() => toggleOpenModal()}>
            Cancel
          </button>
        </div>
      </form>
    </StyledMailForm>
  );
}
