//@ts-nocheck
import * as React from "react";
import Svg, {
  Path,
  G,
  Defs,
  RadialGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CommunityCheck(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.333 1.5L17.127 6v9l-7.794 4.5L1.539 15V6l7.794-4.5z"
        fill="url(#paint0_radial_2427_3876)"
        stroke="#32D583"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G filter="url(#filter0_d_2427_3876)">
        <Path
          d="M5.333 10.86l1.954 2.147a.566.566 0 00.206.152.706.706 0 00.544.013.586.586 0 00.216-.142l4.442-4.53"
          stroke="#fff"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2427_3876"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-9.7703 -11.92594 10.67588 -8.7462 14.783 16.438)"
        >
          <Stop stopColor="#095E44" />
          <Stop offset={0.384584} stopColor="#0D7E4F" />
          <Stop offset={1} stopColor="#1AAA6E" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default CommunityCheck;
