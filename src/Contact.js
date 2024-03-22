import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2>Contact</h2>
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121794.93590906134!2d78.51406119726565!3d17.455322300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7612c2c68369%3A0x9ea4b426b7e3699!2sSreenidhi%20Institute%20of%20Science%20%26%20Technology%20-%20SNIST!5e0!3m2!1sen!2sin!4v1708607548806!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowfullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Maps Embed"
></iframe>

 <div className="container">
  <div className="contact-form">
<form
 

className="contact-inputs">
  <input
  type="text"
  placeholder="username"
required
  >
  </input>
  <input
  type="text"
  placeholder="Email"
required
  >
  </input>
  <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>
  <input
  type="Submit"
value="send"
  >
  </input>
</form>
  </div>
 </div>
  </Wrapper>;
};

export default Contact;
