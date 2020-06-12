import React from 'react';
import styled from 'styled-components';
import { email } from '../config';

const EmailLink = styled.a`
  background-color: var(--color-pink);
  padding: 0.6em 1.5em;
  font-size: 2rem;
  color: var(--color-white);
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-coral);
    color: var(--color-white);
  }
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
