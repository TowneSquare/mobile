import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SendTokenIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#FF4471"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0ZM9.01 14.264l5.98-4.528" />
      <Path d="m10.787 9.156 4.203.58-.58 4.203" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 24V0h24v24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SendTokenIcon;
