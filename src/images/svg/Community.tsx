import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Community = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M30 43.125a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75ZM15 28.125a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM45 28.125a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
        opacity={0.2}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M45 28.125a14.042 14.042 0 0 1 11.25 5.625M3.75 33.75A14.041 14.041 0 0 1 15 28.125M30 43.125a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M16.875 50.625a15.235 15.235 0 0 1 26.25 0M37.734 18.75A7.5 7.5 0 1 1 45 28.125M15 28.125a7.5 7.5 0 1 1 7.266-9.375"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Community;
