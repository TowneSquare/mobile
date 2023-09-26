import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SendButton = (props: SvgProps) => (
  <Svg

  width={props.size}
  height={props.size}
  viewBox="0 0 24 24"
  fill="none"
  {...props}
>
  <G
    clipPath="url(#clip0_2427_10668)"
    fillRule="evenodd"
    clipRule="evenodd"
    fill="#fff"
  >
    <Path d="M4.334 1.262a1.75 1.75 0 011.022.215l.008.004 15.745 8.983a1.75 1.75 0 010 3.055L5.354 22.53a1.75 1.75 0 01-2.498-2.116l2.88-8.426L2.85 3.585a1.75 1.75 0 011.483-2.323zm.62 2.287l2.695 7.857a1.74 1.74 0 010 1.165l-2.694 7.883 14.796-8.462L4.953 3.549z" />
    <Path d="M5.75 12a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
  </G>
  <Defs>
    <ClipPath id="clip0_2427_10668">
      <Path fill="#fff" d="M0 0H24V24H0z" />
    </ClipPath>
  </Defs>
</Svg>
);
export default SendButton;
