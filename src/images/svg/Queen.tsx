//@ts-nocheck
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
const Queen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <Path
        fill="url(#b)"
        stroke="#FEDF89"
        strokeWidth={1.125}
        d="M8.047 1.019a1.222 1.222 0 0 1 1.905 0l1.134 1.41a1.222 1.222 0 0 0 1.085.45l1.8-.195a1.222 1.222 0 0 1 1.35 1.35l-.196 1.8a1.222 1.222 0 0 0 .45 1.084l1.411 1.134a1.222 1.222 0 0 1 0 1.905l-1.415 1.129a1.225 1.225 0 0 0-.45 1.085l.195 1.8a1.22 1.22 0 0 1-1.35 1.35l-1.8-.196a1.223 1.223 0 0 0-1.084.45l-1.13 1.406a1.22 1.22 0 0 1-1.905 0l-1.133-1.41a1.224 1.224 0 0 0-1.085-.45l-1.8.196a1.221 1.221 0 0 1-1.35-1.35l.196-1.8a1.224 1.224 0 0 0-.45-1.086l-1.41-1.133a1.222 1.222 0 0 1 0-1.905l1.41-1.134a1.221 1.221 0 0 0 .45-1.084l-.196-1.8a1.222 1.222 0 0 1 1.35-1.35l1.8.195a1.224 1.224 0 0 0 1.085-.45L8.047 1.02Z"
      />
      <Path
        stroke="#fff"
        d="m12.307 10.627.44-3.317a.25.25 0 0 0-.36-.26L10.96 8.137a.25.25 0 0 1-.363-.05l-1.41-2.06a.243.243 0 0 0-.374 0l-1.41 2.06a.25.25 0 0 1-.363.05L5.613 7.05a.25.25 0 0 0-.36.26l.44 3.333"
      />
      <Path
        stroke="#fff"
        d="M12 10.559H6a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9}
        x2={9}
        y1={0.563}
        y2={17.438}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEC84B" />
        <Stop offset={1} stopColor="#F79009" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Queen;
