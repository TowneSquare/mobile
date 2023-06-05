import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const More = (props: SvgProps) => (
  <Svg
  
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M4 15.988a1.2 1.2 0 0 1 1.2-1.2h21.6a1.2 1.2 0 1 1 0 2.4H5.2a1.2 1.2 0 0 1-1.2-1.2ZM4 8.133a1.2 1.2 0 0 1 1.2-1.2h21.6a1.2 1.2 0 0 1 0 2.4H5.2a1.2 1.2 0 0 1-1.2-1.2ZM4 23.843a1.2 1.2 0 0 1 1.2-1.2h21.6a1.2 1.2 0 0 1 0 2.4H5.2a1.2 1.2 0 0 1-1.2-1.2Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default More;
