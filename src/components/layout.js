/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer class='footer'>
        <ul class='social-list'>
          <li class='social-list__item'>
            <a href='' class='social-list__link'>
              a
            </a>
          </li>
          <li class='social-list__item'>
            <a href='' class='social-list__link'>
              b
            </a>
          </li>
          <li class='social-list__item'>
            <a href='' class='social-list__link'>
              c
            </a>
          </li>
        </ul>
        <p class='rights-text'>
          Built by Upinder Bains <span>code Githib icon</span>
        </p>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
