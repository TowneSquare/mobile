import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const DelIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.133 8.133 0 0 0 10 1.875Zm2.942 10.183a.624.624 0 1 1-.884.884L10 10.884l-2.058 2.058a.624.624 0 1 1-.884-.884L9.116 10 7.058 7.942a.625.625 0 0 1 .884-.884L10 9.116l2.058-2.058a.626.626 0 0 1 .884.884L10.884 10l2.058 2.058Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DelIcon;
