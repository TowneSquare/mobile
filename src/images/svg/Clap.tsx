import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Clap = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G
      stroke="#B882FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M19.375 17 15 9.439a2.25 2.25 0 0 0-3.897 2.25M22 1v2M27 2.627l-1 1.64M30.458 7l-1.88.606M21.346 11.75 17.52 5.125a2.25 2.25 0 1 0-3.895 2.25" />
      <Path d="M25.194 23.216a9 9 0 0 0 1.599-11.03L24.418 8.07a2.25 2.25 0 0 0-3.898 2.25M14.449 8.805l-.925-1.603-.899-1.558a2.25 2.25 0 0 0-3.897 2.25l.826 1.43" />
      <Path d="m10.699 20-2.5-4.329a2.25 2.25 0 0 0-3.898 2.25L8.676 25.5a9 9 0 0 0 15.59-9l-2.376-4.114a2.252 2.252 0 0 0-3.094-.859 2.25 2.25 0 0 0-.802 3.11" />
      <Path d="M14.166 17 11 11.515l-.9-1.559a2.25 2.25 0 0 0-3.898 2.25l2 3.465" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Clap;
