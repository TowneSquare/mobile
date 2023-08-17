import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SwapIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <G
      stroke="#B882FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M6.5 6.5s2.25-2.25 6-2.25c5.25 0 8.25 5.25 8.25 5.25M18.5 18.5s-2.25 2.25-6 2.25c-5.25 0-8.25-5.25-8.25-5.25" />
      <Path d="M16.25 9.5h4.5V5M8.75 15.5h-4.5V20" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.5h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwapIcon;
