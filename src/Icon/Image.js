import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 100%;

`;

const Image = () => (
  <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
    <path
      fill='#a2d9ff'
      fill-opacity='1'
      d='M0,288L80,282.7C160,277,320,267,480,229.3C640,192,800,128,960,85.3C1120,43,1280,21,1360,10.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
    ></path>
  </Svg>
);

export default Image;
