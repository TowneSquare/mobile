import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const UserFriends = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G
      stroke="#B882FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M10.5 20a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
      <Path d="M1.279 25a11 11 0 0 1 18.442 0M21.5 20a10.991 10.991 0 0 1 9.221 5M19.086 7.463A6.5 6.5 0 1 1 21.5 20" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UserFriends;
