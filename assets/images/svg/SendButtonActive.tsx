import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SendButtonActive = (props: SvgProps) => (
  <Svg

  width={props.size}
  height={props.size}
  viewBox="0 0 24 24"
  fill="none"
  {...props}
>
  <G clipPath="url(#clip0_1507_33083)">
    <Path
      d="M21.75 11.99a1.499 1.499 0 01-.767 1.312L5.242 22.303A1.501 1.501 0 013.09 20.5l2.563-7.495a.375.375 0 01.355-.254h6.742a.75.75 0 00.75-.8.767.767 0 00-.774-.7H6.015a.375.375 0 01-.355-.253l-2.573-7.5a1.5 1.5 0 012.149-1.803l15.75 8.99a1.5 1.5 0 01.764 1.306z"
      fill="#9264F8"
    />
  </G>
  <Defs>
    <ClipPath id="clip0_1507_33083">
      <Path fill="#fff" d="M0 0H24V24H0z" />
    </ClipPath>
  </Defs>
</Svg>
);
export default SendButtonActive;
