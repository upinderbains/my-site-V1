import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config';
import styled from 'styled-components';


const List = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color-navy);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
    top: 8vh;
    right: 0;
    height: 100vh;
    width: 30%;
    padding: 50px 0px;
    transition: transform 0.3s ease-in-out;
  }
`;
const ListItem = styled.li`
  margin: 18px 10px;
`;
const ListLink = styled(Link)`
  font-size: var(--fs-xl);
  color: var(--color-white);
`;
const ResumeLink = styled.a`
  font-size: var(--fs-xl);
  color: var(--color-white);
`;

const Side = ({ open }) => {
  return (
    <List open={open}>
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
  );
};

export default Side;
