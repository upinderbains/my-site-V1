import React from 'react';
import styled from 'styled-components';
import { email } from '../config';
import mixins from '../styles/mixins';

const Container = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: var(--fs-h2);
`;

const EmailLink = styled.a`
  ${mixins.button}
`;

const Contact = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title, buttonText } = frontmatter;
  return (
    <Container>
      <Title>{title}</Title>
      <EmailLink
        href={`mailto:${email}`}
        target='_blank'
        rel='nofollow noopener noreferrer'
      >
        {buttonText}
      </EmailLink>
    </Container>
  );
};

export default Contact;
