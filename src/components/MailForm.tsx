import { useContext, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledMailForm } from "./styled/StyledMailForm";
import { Context } from "../contexts";

export default function MailForm() {
  const { theme, openModal, toggleOpenModal } = useContext(Context);

  const [state, handleSubmit] = useForm("mrgjpkbl");

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

  if (state.succeeded) {
    return (
      <StyledMailForm open={openModal} theme={theme}>
        <div className='success'>
          <FontAwesomeIcon icon={faEnvelopeCircleCheck}></FontAwesomeIcon>
          <p>Thanks!</p>
          <p> Message recieved!</p>
        </div>
      </StyledMailForm>
    );
  }

  return (
    <StyledMailForm open={openModal} theme={theme}>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor='comments'>Message:</label>
          <textarea
            name='comments'
            id='comments'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='btns-container'>
          <button type='submit' name='submit' disabled={state.submitting}>
            Send
          </button>
          <button
            type='button'
            name='cancel'
            onClick={() => toggleOpenModal()}
            disabled={state.submitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </StyledMailForm>
  );
}
