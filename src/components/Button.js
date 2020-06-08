import React from 'react';
import styled from 'styled-components';
import { email } from '../config';

const EmailLink = styled.a`
  background-color: green;
  padding: 0.5em 1em;
  font-size: 2rem;
`;
const Button = ({ children }) => {
  return (
    <EmailLink
      href={`mailto:${email}`}
      target='_blank'
      rel='nofollow noopener noreferrer'
    >
      {children}
      
    </EmailLink>
  );
};

export default Button;
