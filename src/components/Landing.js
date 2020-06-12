import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Hero from './Hero';
import Logo from '../images/topwave.svg';

const Header = styled.header`
  height: 100vh;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100%;
`;

const Landing = ({ data }) => {
  return (
    <Header>
      <Nav />
      <Hero data={data} />
    </Header>
  );
};

export default Landing;
