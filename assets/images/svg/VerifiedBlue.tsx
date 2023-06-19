import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const VerifiedBlue = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      clipPath="url(#a)"
    >
      <Path
        fill="#7F56D9"
        stroke="#7F56D9"
        d="M.563 8.999a8.437 8.437 0 1 0 16.874 0A8.437 8.437 0 0 0 .562 9Z"
      />
      <Path
        stroke="#fff"
        d="m4.5 9.917 1.838 2.608a.786.786 0 0 0 1.28.038L13.5 5.121"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default VerifiedBlue;
