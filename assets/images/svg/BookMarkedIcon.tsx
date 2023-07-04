import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const BookMarkedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#9264F8"
        fillRule="evenodd"
        d="M6.431 4.231c.245-.244.576-.381.921-.381h9.13a1.302 1.302 0 0 1 1.303 1.302V19.5a.65.65 0 0 1-.995.551l-4.873-3.045-4.872 3.045a.65.65 0 0 1-.995-.551V5.152c0-.345.137-.676.381-.92Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookMarkedIcon;
