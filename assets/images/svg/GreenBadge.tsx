//@ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  G,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
const GreenBadge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      stroke="#32D583"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m12.5 1 10.392 6v12L12.5 25 2.108 19V7L12.5 1Z"
    />
    <G filter="url(#b)">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7.167 13.48 2.605 2.862c.07.085.164.154.275.204a.958.958 0 0 0 .725.017.782.782 0 0 0 .289-.19l5.922-6.04"
        shapeRendering="crispEdges"
      />
    </G>
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-129.326 14.835 5.779) scale(20.5561 18.4014)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#095E44" />
        <Stop offset={0.385} stopColor="#0D7E4F" />
        <Stop offset={1} stopColor="#1AAA6E" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default GreenBadge;
