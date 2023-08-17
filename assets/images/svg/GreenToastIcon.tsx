import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const GreenToastIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#2AB576"
        d="M9 1.688A7.312 7.312 0 1 0 16.313 9 7.32 7.32 0 0 0 9 1.687Zm3.21 6.022-3.937 3.938a.562.562 0 0 1-.796 0L5.79 9.96a.563.563 0 0 1 .795-.795l1.29 1.29 3.54-3.54a.563.563 0 0 1 .796.795Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GreenToastIcon;
