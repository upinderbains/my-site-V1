import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Landing from './Landing';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children}) => {
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Upinder Bains | Software Developer</title>
      </Helmet>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
