import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SendButton = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M6.706 11.737a.74.74 0 0 1 0 .504L3.8 20.745a.75.75 0 0 0 1.068.911l15.75-9.008a.75.75 0 0 0 0-1.313L4.868 2.35a.75.75 0 0 0-1.072.907l2.91 8.48ZM12.75 12h-6" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SendButton;
