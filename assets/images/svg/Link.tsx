import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Link = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M49.205 10.795a11.25 11.25 0 0 0-15.91 0l-6.562 6.563a11.194 11.194 0 0 0-3.16 6.215 11.194 11.194 0 0 0-6.215 3.16l-6.563 6.562a11.25 11.25 0 0 0 15.91 15.91l6.562-6.563a11.193 11.193 0 0 0 3.16-6.216 11.194 11.194 0 0 0 6.215-3.159l6.563-6.562a11.25 11.25 0 0 0 0-15.91Z"
        opacity={0.2}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="m30.91 45-4.205 4.205a11.25 11.25 0 0 1-15.91-15.91l6.589-6.576a11.25 11.25 0 0 1 15.429-.47"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="m29.09 15 4.205-4.204a11.25 11.25 0 0 1 15.91 15.909l-6.589 6.588a11.25 11.25 0 0 1-15.428.457"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Link;
