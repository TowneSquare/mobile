import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const UserCircle = (props: SvgProps) => (
  <Svg width={61} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="M30.5 7.5a22.5 22.5 0 0 0-15.047 39.23A16.875 16.875 0 0 1 30.5 37.5a9.374 9.374 0 1 1 0-18.749 9.374 9.374 0 0 1 0 18.749 16.876 16.876 0 0 1 15.047 9.227A22.5 22.5 0 0 0 30.5 7.5Z"
        opacity={0.2}
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M15.453 46.727a16.876 16.876 0 0 1 30.094 0"
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30.5 52.5C42.926 52.5 53 42.426 53 30S42.926 7.5 30.5 7.5 8 17.574 8 30s10.074 22.5 22.5 22.5Z"
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30.5 37.5a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h60v60H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UserCircle;
