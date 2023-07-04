import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const QuestionIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M12 18a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 18Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13.5v-.75c1.657 0 3-1.176 3-2.625 0-1.45-1.343-2.625-3-2.625s-3 1.176-3 2.625v.375"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default QuestionIcon;
