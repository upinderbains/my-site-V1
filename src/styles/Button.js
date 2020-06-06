import styled from 'styled-components';
import constants from './constants';
const { sizes } = constants;

const Button = styled.button`
  color: ${props => (props.primary ? 'red' : 'blue')};
  font-size: ${props => (props.font ? sizes[props.font] : 2)}rem;
  padding: 0.5em 0.8em;
  transition: ${constants.transition};
  &:hover {
    background-color: ${props => (props.primary ? 'blue' : 'red')};
  }
`;

export default Button;
