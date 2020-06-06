import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';
import mixins from '../styles/mixins';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Upinder Bains | Software Developer</title>
      </Helmet>
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
