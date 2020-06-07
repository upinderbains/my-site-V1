import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Hero from '../components/Hero';

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.hero.edges} />
    <Projects />
    <Contact data={data.contact.edges} />
  </Layout>
);

export const query = graphql`
  {
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            buttonText
            title
          }
        }
      }
    }
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            buttonText
            title
            subTitle
          }
        }
      }
    }
  }
`;
export default IndexPage;
