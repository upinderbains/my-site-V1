import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Hero from '../components/Hero';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </Layout>
  );
};
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
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            external
            github
            tech
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
export default IndexPage;
