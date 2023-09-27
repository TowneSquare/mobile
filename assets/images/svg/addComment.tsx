import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const AddComment = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2750_28510)">
      <Path
        d="M2.852 10.102l7.5-7.5a.562.562 0 01.96.398v3.956c5.108.337 11.287 5.157 11.994 11.312a.938.938 0 01-1.615.75c-1.056-1.126-4.847-4.712-10.378-4.943V18a.562.562 0 01-.96.398l-7.5-7.5a.562.562 0 010-.796zm7.335 6.54V13.5a.563.563 0 01.563-.563c2.6 0 5.134.68 7.53 2.02a18.134 18.134 0 013.826 2.874c-.44-2.49-1.89-4.875-4.125-6.775-2.213-1.874-4.915-2.994-7.231-2.994a.563.563 0 01-.563-.562V4.358L4.046 10.5l6.141 6.142z"
        fill="#AAA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2750_28510">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddComment;
