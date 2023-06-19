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
const Verified = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      clipPath="url(#a)"
    >
      <Path
        fill="url(#b)"
        stroke="#32D583"
        d="M8.047 1.019a1.222 1.222 0 0 1 1.905 0l1.134 1.41a1.222 1.222 0 0 0 1.085.45l1.8-.195a1.222 1.222 0 0 1 1.35 1.35l-.196 1.8a1.222 1.222 0 0 0 .45 1.084l1.411 1.134a1.223 1.223 0 0 1 0 1.905l-1.415 1.129a1.225 1.225 0 0 0-.45 1.085l.195 1.8a1.222 1.222 0 0 1-1.35 1.35l-1.8-.196a1.223 1.223 0 0 0-1.084.45l-1.13 1.406a1.22 1.22 0 0 1-1.905 0l-1.133-1.41a1.224 1.224 0 0 0-1.085-.45l-1.8.196a1.221 1.221 0 0 1-1.35-1.35l.196-1.8a1.223 1.223 0 0 0-.45-1.086l-1.41-1.133a1.222 1.222 0 0 1 0-1.905l1.41-1.134a1.221 1.221 0 0 0 .45-1.084l-.196-1.8a1.222 1.222 0 0 1 1.35-1.35l1.8.195a1.224 1.224 0 0 0 1.085-.45L8.047 1.02Z"
      />
      <Path
        stroke="#fff"
        d="m5 10.33 1.633 2.355a.704.704 0 0 0 .56.315.69.69 0 0 0 .578-.28L13 6"
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
        <Stop stopColor="#039855" />
        <Stop offset={1} stopColor="#027A48" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Verified;
