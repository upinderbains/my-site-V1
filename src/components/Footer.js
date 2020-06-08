import React from 'react';
import styled from 'styled-components';
import mixins from '../styles/mixins';

const Container = styled.footer`
  background-color: var(--color-navy);
  height: 100px;
  margin-top: auto;
  ${mixins.flexCenter};
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <p>&copy; Developed By Upinder Bains</p>
    </Container>
  );
};

export default Footer;
