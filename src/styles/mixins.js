import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  button: css`
    background-color: var(--color-orange);
    padding: 0.5em 1em;
    font-size: 2rem;
    color: #fff;
    font-size: 20px;
    transition: 0.4s ease;

    &:hover{
      background-color: #f44336;
    }
  `
};

export default mixins;
