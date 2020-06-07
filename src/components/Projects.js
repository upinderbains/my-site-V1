import React from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';

const Wrapper = styled.div`
  min-height: 1000px;
`;
const StyledContainer = styled(Section)``;

const Projects = () => {
  return (
    <StyledContainer id='projects'>
      <Wrapper>
        <h1>Projects</h1>
      </Wrapper>
    </StyledContainer>
  );
};

export default Projects;
