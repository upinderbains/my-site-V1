import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Section from '../styles/Section';
import Title from '../styles/Title';

const Wrapper = styled.div`
  margin-top: 100px;
`;
const StyledContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.div`
  text-align: center;
  margin-bottom: 10rem;
`;
const ProjectItem = styled.div`
  display: flex;
  flex-direction: ${props => (props.rev % 2 == 0 ? '' : 'row-reverse')};
  margin-bottom: 5rem;
`;
const ProjectImg = styled.div``;
const StyledImg = styled(Img)`
  width: 500px;
  height: 300px;
`;
const ProjectDescription = styled.div`
  width: 500px;
  margin-left: 5rem;
`;
const StyledDescription = styled.div``;

const Projects = ({ data }) => {
  return (
    <StyledContainer id='projects'>
      <Wrapper>
        <Heading>
          <Title>Projects</Title>
          <Title>Some of my work</Title>
        </Heading>

        {data &&
          data.map(({ node }, index) => {
            const { frontmatter, html } = node;
            const { title, cover } = frontmatter;

            return (
              <ProjectItem rev={index}>
                <ProjectImg>
                  <StyledImg fluid={cover.childImageSharp.fluid} alt={title} />
                </ProjectImg>
                <ProjectDescription>
                  <Title>{title}</Title>
                  <StyledDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </ProjectDescription>
              </ProjectItem>
            );
          })}
      </Wrapper>
    </StyledContainer>
  );
};

export default Projects;
