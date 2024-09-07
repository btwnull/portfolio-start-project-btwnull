import React, { ElementRef, useRef } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_q6bzu9b", "template_fm1guja", form.current, {
        publicKey: "ZrJZ0GDBqeoD4LgN7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContacts id={"contact"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <Field required placeholder={"name"} name={"user_name"} />
          <Field required placeholder={"email"} name={"email"} />
          <Field required placeholder={"subject"} name={"subject"} />
          <Field
            required
            placeholder={"message"}
            as={"textarea"}
            name={"message"}
          />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  position: relative;
`;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${Theme.colors.secondaryBg};
  border: 1px solid ${Theme.colors.borderColor};
  padding: 7px 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.colors.font};

  &::placeholder {
    color: ${Theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor};
  }
`;
