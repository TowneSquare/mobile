import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#FF4471" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M3 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6ZM9.75 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75ZM14.25 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" />
      <Path d="M5.25 5.25A.75.75 0 0 1 6 6v14.25h12V6a.75.75 0 0 1 1.5 0v14.25a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V6a.75.75 0 0 1 .75-.75Z" />
      <Path d="M8.159 2.909A2.25 2.25 0 0 1 9.75 2.25h4.5A2.25 2.25 0 0 1 16.5 4.5V6A.75.75 0 0 1 15 6V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5V6a.75.75 0 0 1-1.5 0V4.5c0-.597.237-1.169.659-1.591Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DeleteIcon;
