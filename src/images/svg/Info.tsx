import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Info = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M10.25 11.25a1 1 0 0 1 1-1A1.75 1.75 0 0 1 13 12v3.531a1 1 0 0 1-.25 1.969A1.75 1.75 0 0 1 11 15.75v-3.531a1 1 0 0 1-.75-.969Z"
        clipRule="evenodd"
      />
      <Path d="M11.625 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Info;
