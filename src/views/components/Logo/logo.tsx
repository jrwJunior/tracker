import React from 'react';

import logo from 'source/logo.png';
import { LogoImage, Image, Description } from './style';

const Logo = () => (
  <LogoImage>
    <Image src={logo} alt="ДО КОМБІНАТ “ПРОГРЕС”" />
    <Description>ДО КОМБІНАТ “ПРОГРЕС”</Description>
  </LogoImage>
);

export default Logo;
