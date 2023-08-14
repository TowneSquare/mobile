import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SwapToken = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path
        strokeWidth={1.5}
        d="M18 18s-2.25 2.25-6 2.25C6.75 20.25 3.75 15 3.75 15M6 6s2.25-2.25 6-2.25c5.25 0 8.25 5.25 8.25 5.25"
      />
      <Path strokeWidth={1.5} d="M8.25 15h-4.5v4.5" />
      <Path strokeWidth={2} d="M15.75 9h4.5V4.5" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M24 24H0V0h24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwapToken;
