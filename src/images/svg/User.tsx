import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const User = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M30 7.5a22.5 22.5 0 0 0-15.046 39.23A16.875 16.875 0 0 1 30 37.5a9.375 9.375 0 1 1 0-18.75 9.375 9.375 0 0 1 0 18.75 16.875 16.875 0 0 1 15.047 9.227A22.5 22.5 0 0 0 30 7.5Z"
        opacity={0.2}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M14.953 46.727a16.876 16.876 0 0 1 30.094 0"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30 52.5c12.426 0 22.5-10.074 22.5-22.5S42.426 7.5 30 7.5 7.5 17.574 7.5 30 17.574 52.5 30 52.5Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30 37.5a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default User;
