import React from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import Button from './Button';
import mixins from '../styles/mixins';
import Logo from '../images/waves.svg';

const StyledContainer = styled(Section)`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
`;
const Wrapper = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  margin-top: -10rem;
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
