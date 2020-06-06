import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  button: css`
    background-color: green;
    padding: 0.5em 1em;
    font-size: 2rem;
  `
};

export default mixins;
