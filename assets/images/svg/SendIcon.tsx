import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SendIcon = (props: SvgProps) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <G
      clipPath="url(#clip0_3244_26534)"
      stroke="#B882FF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 21.5a9 9 0 100-18 9 9 0 000 18zM8.25 12.5h7.5" />
      <Path d="M12.75 9.5l3 3-3 3" />
    </G>
    <Defs>
      <ClipPath id="clip0_3244_26534">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SendIcon;
