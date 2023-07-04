import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SendButtonActive = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#9264F8"
        d="M21.75 12.49a1.499 1.499 0 0 1-.767 1.312L5.242 22.803A1.501 1.501 0 0 1 3.09 21l2.563-7.495a.375.375 0 0 1 .355-.254h6.742a.75.75 0 0 0 .75-.8.767.767 0 0 0-.774-.7H6.015a.375.375 0 0 1-.355-.253l-2.573-7.5a1.5 1.5 0 0 1 2.149-1.803l15.75 8.99a1.5 1.5 0 0 1 .764 1.306Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SendButtonActive;
