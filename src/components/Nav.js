import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config';
import mixins from '../styles/mixins';
import styled from 'styled-components';

const Container = styled.nav`
  height: 100px;
  background-color: var(--color-navy);
`;

const List = styled.ul`
  ${mixins.flexCenter};
  justify-content: flex-end;
  padding: 2rem 5rem;
`;
const ListItem = styled.li`
  margin-left: 20px;
`;
const ListLink = styled(Link)`
  font-size: var(--fs-lg);
  color: var(--color-white);
`;
const ResumeLink = styled.a``;

const Nav = () => {
  return (
    <Container>
      <List>
        {navLinks.map(({ name, url }) => (
          <ListItem>
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
