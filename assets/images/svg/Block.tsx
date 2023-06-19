import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Block = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#FF4471" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M4.93 4.93a1 1 0 0 1 1.413 0l12.728 12.727a1 1 0 1 1-1.414 1.414L4.929 6.343a1 1 0 0 1 0-1.414Z" />
      <Path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Block;
