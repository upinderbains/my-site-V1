import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const IndexPage = ({ data }) => (
  <Layout>
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
  }
`;
export default IndexPage;
