import React from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import Button from './Button';
import mixins from '../styles/mixins';

const StyledContainer = styled(Section)`
  min-height: calc(100vh - 100px);
  ${mixins.flexCenter}
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: var(--fs-h1);
  line-height: 1.2;
  color: var(--color-white);
`;

const Subtitle = styled.h3`
  color: var(--color-grey);
`;

const StyledButton = styled.div`
  padding-top: 4rem;
`;

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { buttonText, title, subTitle } = frontmatter;

  return (
    <StyledContainer>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      <StyledButton>
        <Button>{buttonText}</Button>
      </StyledButton>
    </StyledContainer>
  );
};

export default Hero;
