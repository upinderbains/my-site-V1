import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config';
import mixins from '../styles/mixins';
import styled from 'styled-components';

const Container = styled.nav`
  height: 100px;
  background-color: red;
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
`;

const Nav = () => {
  return (
    <Container>
      <List>
        {navLinks.map(({ name, url }) => (
          <ListItem>
            <ListLink to={url}>{name}</ListLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Nav;
