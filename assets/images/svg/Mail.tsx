import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Mail = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <G
      clipPath="url(#clip0_2759_41291)"
      stroke="#404040"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M28 7L16 18 4 7" />
      <Path d="M4 7h24v17a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM13.819 16l-9.51 8.718M27.691 24.718L18.181 16" />
    </G>
    <Defs>
      <ClipPath id="clip0_2759_41291">
        <Path fill="#fff" d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Mail;
