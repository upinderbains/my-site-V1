import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --color-darkNavy: #020c1b;
    --color-navy: #0B3C5D;
    --color-navy-light: rgba(11,60,93,0.8);
    --color-white: #ffffff;
    --color-pink: #EC576B;
    --color-coral: #E14658;
    --color-coral-light: rgba(225,70,88, 0.2);
    --color-coral-dark: rgba(225,70,88, 0.3);
    --color-blue-light: #e3f1fc;



--ff-primary: 'Nunito', 'sans-serif';
 --ff-secondary: 'Josefin Sans', 'sans-serif';
  --fs-xs: 1.2rem;
  --fs-sm: 1.4rem;
  --fs-md: 1.6rem;
  --fs-lg: 1.8rem;
  --fs-xl: 2rem;
  --fs-xxl: 2.2rem;
  --fs-h3: 3.2rem;
  --fs-h2: 3.5rem;
  --fs-h1: 4rem;

}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
box-sizing: border-box;
font-size: 62.5%;
}

body{
    font-family: var(--ff-primary);
    font-weight: 600;
    line-height: 1.6;
    font-size: var(--fs-lg);
    background-color: var(--color-white);
}

h1,h2,h3 {
    font-weight: 600;
}
p{
    color: var(--color-white);
}

img{
    width: 100%;
    max-width: 100%;
}

svg{
    width: 100%;
    height: 100%;
    fill: currentColor;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
    border: 0;
    outline: none;
}

ul{
    list-style: none;
    li {
        cursor: pointer;
    }
}

`;
export default GlobalStyles;
