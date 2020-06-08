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
  width: 600px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  color: #fff;
  font-size: 18px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  ${baseInputCss}
`;

const TextArea = styled.textarea`
  ${baseInputCss}
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
        <Input type='text' name='name' placeholder='Enter Your Name' required />
        <Input
          type='email'
          name='email'
          placeholder='Enter Your Email'
          required
        />
        <TextArea
          name='message'
          placeholder='Message'
          rows='4'
          required
        ></TextArea>
        <Button type='submit'>{buttonText}</Button>
      </Form>
    </Container>
  );
};

export default Contact;
