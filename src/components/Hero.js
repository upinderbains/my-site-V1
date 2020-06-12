import React from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import Button from './Button';
import Logo from '../images/blob.svg';

const StyledContainer = styled(Section)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;

  @media (max-width: 600px) {
    background-size: 95%;

  }
`;

const Title = styled.h2`
  font-size: var(--fs-h1);
  line-height: 1.2;
  color: var(--color-navy);
  pointer-events: none;
`;

const Subtitle = styled.h3`
  color: var(--color-grey);
  color: var(--color-pink);
  pointer-events: none;
`;

const StyledButton = styled.div`
  padding-top: 4rem;
`;

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { buttonText, title, subTitle } = frontmatter;

  return (
    <StyledContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <StyledButton>
          <Button>{buttonText}</Button>
        </StyledButton>
      </Wrapper>
    </StyledContainer>
  );
};

export default Hero;
