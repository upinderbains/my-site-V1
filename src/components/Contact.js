import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';
import Section from '../styles/Section';

const Container = styled(Section)`
  text-align: center;
  min-height: 500px;
`;
const Title = styled.h1`
  font-size: var(--fs-h2);
`;

const Button = styled.button`
  ${mixins.button}
`;

const Contact = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title, buttonText } = frontmatter;
  return (
    <Container>
      <Title>{title}</Title>
      <form
        method='post'
        netlify-honeypot='bot-field'
        data-netlify='true'
        name='contact'
      >
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />
        <label>
          Your Name: <input type='text' name='name' />
        </label>
        <label>
          Your Email: <input type='email' name='email' />
        </label>
        <label>
          Message: <textarea name='message'></textarea>
        </label>
        <Button type='submit'>{buttonText}</Button>
      </form>
    </Container>
  );
};

export default Contact;
