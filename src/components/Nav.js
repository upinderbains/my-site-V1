import React from 'react';
import mixins from '../styles/mixins';
import styled from 'styled-components';
import Ham from './Ham';
import { Link } from 'gatsby';
import { navLinks } from '../config';

const Container = styled.nav`
  ${mixins.flexCenter};
  margin-left: auto;
  height: 8vh;
  width: 100%;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0px 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  margin: 18px 20px;
`;
const ListLink = styled(Link)`
  font-size: var(--fs-xl);
  color: var(--color-white);
`;
const ResumeLink = styled.a`
  font-size: var(--fs-xl);
  color: var(--color-white);
`;

const Nav = () => {
  return (
    <Container>
      <Ham />
      <List>
        {navLinks.map(({ name, url }, index) => (
          <ListItem key={index}>
            <ListLink to={url}>{name}</ListLink>
          </ListItem>
        ))}
        <ListItem>
          <ResumeLink
            href='/resume.pdf'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            Resume
          </ResumeLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default Nav;
