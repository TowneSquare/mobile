import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const CtizenLogo = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" {...props}>
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      clipPath="url(#a)"
    >
      <Path
        fill="url(#b)"
        stroke="#666"
        d="M35.767 4.523a5.433 5.433 0 0 1 8.466 0l5.04 6.27a5.429 5.429 0 0 0 4.82 2l8-.87a5.435 5.435 0 0 1 6 6l-.87 8a5.43 5.43 0 0 0 2 4.82l6.27 5.04a5.433 5.433 0 0 1 0 8.467l-6.29 5.017a5.44 5.44 0 0 0-2 4.823l.87 8a5.43 5.43 0 0 1-6 6l-8-.87a5.425 5.425 0 0 0-4.82 2l-5.02 6.247a5.43 5.43 0 0 1-8.466 0L30.73 69.2a5.437 5.437 0 0 0-4.823-2l-8 .87a5.427 5.427 0 0 1-6-6l.87-8a5.436 5.436 0 0 0-2-4.823L4.51 44.21a5.43 5.43 0 0 1 0-8.467l6.267-5.04a5.426 5.426 0 0 0 2-4.82l-.87-8a5.431 5.431 0 0 1 6-6l8 .87a5.44 5.44 0 0 0 4.823-2l5.037-6.23Z"
      />
      <Path
        stroke="#fff"
        d="m54.697 47.229 1.956-14.741a1.111 1.111 0 0 0-1.6-1.155l-6.341 4.83a1.111 1.111 0 0 1-1.615-.223l-6.267-9.156a1.081 1.081 0 0 0-1.659 0l-6.267 9.156a1.112 1.112 0 0 1-1.615.222l-6.34-4.83a1.111 1.111 0 0 0-1.6 1.156l1.955 14.815"
      />
      <Path
        stroke="#fff"
        d="M53.333 46.929H26.667a3.333 3.333 0 0 0 0 6.666h26.666a3.333 3.333 0 1 0 0-6.666Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={40.001}
        x2={40.001}
        y1={2.496}
        y2={77.496}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EEE" />
        <Stop offset={1} stopColor="#5F5F5F" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h80v80H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CtizenLogo;
