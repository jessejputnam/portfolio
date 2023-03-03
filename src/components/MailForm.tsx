import styled from "styled-components";

const StyledMailForm = styled.div`
  /* display: flex; */
  display: none;
  flex-direction: column;
`;

export default function MailForm() {
  return (
    <form action='mailto:info@example.com' method='get' encType='text/plain'>
      <StyledMailForm>
        <div>
          <label htmlFor='name'>
            Name:
            <input type='text' name='name' id='name' />
          </label>
        </div>

        <div>
          <label htmlFor='email'>
            Email:
            <input type='text' name='email' id='email' />
          </label>
        </div>

        <div>
          <label>Comments:</label>
          <br />
          <textarea
            name='comments'
            rows={12}
            cols={35}
            placeholder='Send me a message!'
          ></textarea>
        </div>

        <div>
          <input type='submit' name='submit' value='Send' />
          <input type='reset' name='reset' value='Clear Form' />
        </div>
      </StyledMailForm>
    </form>
  );
}
