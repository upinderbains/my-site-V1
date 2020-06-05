import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Upinder Bains | Software Developer</title>
    </Helmet>
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
