import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const RemoveAttachment = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Rect width={36} height={36} fill="#000" fillOpacity={0.7} rx={18} />
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M24.214 11.786a.834.834 0 0 1 0 1.178l-11.25 11.25a.833.833 0 0 1-1.178-1.178l11.25-11.25a.833.833 0 0 1 1.178 0Z" />
      <Path d="M11.786 11.786a.833.833 0 0 1 1.178 0l11.25 11.25a.833.833 0 0 1-1.178 1.178l-11.25-11.25a.833.833 0 0 1 0-1.178Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8 8h20v20H8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RemoveAttachment;
