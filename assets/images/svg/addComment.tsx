import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const AddComment = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="m2.852 10.102 7.5-7.5a.562.562 0 0 1 .96.398v3.956c5.108.337 11.287 5.157 11.994 11.312a.938.938 0 0 1-1.615.75c-1.056-1.126-4.847-4.712-10.378-4.943V18a.562.562 0 0 1-.96.398l-7.5-7.5a.562.562 0 0 1 0-.796Zm7.335 6.54V13.5a.563.563 0 0 1 .563-.563c2.6 0 5.134.68 7.53 2.02a18.134 18.134 0 0 1 3.826 2.874c-.44-2.49-1.89-4.875-4.125-6.775-2.213-1.874-4.915-2.994-7.231-2.994a.563.563 0 0 1-.563-.562V4.358L4.046 10.5l6.141 6.142Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddComment;
