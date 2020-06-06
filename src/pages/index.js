import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyles from '../styles/GlobalStyles';

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Helmet>
      <meta charSet='utf-8' />
      <title>Upinder Bains | Software Developer</title>
    </Helmet>
  </>
);

export default IndexPage;
