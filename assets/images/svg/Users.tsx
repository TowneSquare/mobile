import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Users = (props: SvgProps) => (
  <Svg width={61} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="M20.188 37.5c6.73 0 12.187-5.456 12.187-12.188 0-6.73-5.456-12.187-12.188-12.187C13.457 13.125 8 18.581 8 25.313 8 32.043 13.457 37.5 20.188 37.5Z"
        opacity={0.2}
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M2.898 46.875a20.626 20.626 0 0 1 34.58 0M40.813 37.5a20.61 20.61 0 0 1 17.29 9.375"
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M20.188 37.5c6.73 0 12.187-5.456 12.187-12.188 0-6.73-5.456-12.187-12.188-12.187C13.457 13.125 8 18.581 8 25.313 8 32.043 13.457 37.5 20.188 37.5ZM36.287 13.992A12.19 12.19 0 0 1 52.61 28.326 12.189 12.189 0 0 1 40.813 37.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h60v60H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Users;
