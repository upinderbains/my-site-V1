import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '../styles/mixins';
import Section from '../styles/Section';

const Container = styled(Section)`
  text-align: center;
  min-height: 500px;
`;
const Form = styled.form`
  ${mixins.flexCenter};
  flex-direction: column;
  margin-top: 5rem;
`;

const baseInputCss = css`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  color: #fff;
  font-size: 18px;
  position: relative;
  letter-spacing: 1px;
`;
const baseAnimationCss = css`
  &:focus,
  &:valid {
    border-bottom: 1px solid white;
  }
  &:invalid {
    border-bottom: 1px solid gray;
  }
  &:focus ~ span,
  &:valid ~ span,
  &:focus:invalid ~ span {
    transform: translateY(-25px);
  }
  &:focus:valid ~ span {
    color: #fff;
  }
`;
const InputContainer = styled.div`
  position: relative;
  width: 500px;
  margin-bottom: 60px;
  :last-of-type {
    margin-bottom: 0px;
  }

  input {
    height: 40px;
  }
`;
const Input = styled.input`
  ${baseInputCss}
  &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-darkNavy) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  ${baseAnimationCss};
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 0;
  color: gray;
  font-size: 1.6rem;
  display: inline-block;
  transition: all 0.3s;
  pointer-events: none;
`;
const TextArea = styled.textarea`
  ${baseInputCss};
  ${baseAnimationCss};
`;
const Title = styled.h1`
  font-size: var(--fs-h2);
  color: var(--color-white);
`;

const Button = styled.button`
  ${mixins.button}
  margin-top: 20px;
`;

const Contact = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title, buttonText } = frontmatter;
  return (
    <Container>
      <Title>{title}</Title>
      <Form
        method='post'
        netlify-honeypot='bot-field'
        data-netlify='true'
        name='contact'
      >
        <Input type='hidden' name='bot-field' />
        <Input type='hidden' name='form-name' value='contact' />
        <InputContainer>
          <Input type='text' name='name' autocomplete='off' required />
          <StyledSpan>Name</StyledSpan>
        </InputContainer>
        <InputContainer>
          <Input type='email' name='email' autocomplete='off' required />
          <StyledSpan>Email</StyledSpan>
        </InputContainer>

        <InputContainer>
          <TextArea name='message' rows='4' required></TextArea>
          <StyledSpan>Message</StyledSpan>
        </InputContainer>

        <Button type='submit'>{buttonText}</Button>
      </Form>
    </Container>
  );
};

export default Contact;
