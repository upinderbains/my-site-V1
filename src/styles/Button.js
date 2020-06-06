import styled, { css } from 'styled-components';
import { sizes } from './constants';

const Button = styled.button`
  font-size: ${(props) => (props.font ? sizes[props.font] : 1.8)}rem;
  border-radius: 3px;
  color: ${(props) =>
    props.primary ? 'red' : `var(--color-orange)`};
  border: ${(props) =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.8em 1em;
  transition: 0.5s all ease-out;
  background-color: ${(props) => (props.primary ? `var(--color-navy)` : `var(--color-navy)`)};

  &:hover {
    color: white;
    background-color: ${(props) => (props.primary ? `var(--color-blue)` : `var(--color-red)`)};
  }
`;

export default Button;
