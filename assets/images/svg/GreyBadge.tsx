//@ts-nocheck
import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GreyBadge(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 18 19"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2774_6291)">
        <Path
          d="M8.02 1.646a1.195 1.195 0 011.86 0l1.11 1.38a1.194 1.194 0 001.059.44l1.759-.192a1.194 1.194 0 011.32 1.32l-.192 1.76a1.195 1.195 0 00.44 1.06l1.378 1.11a1.195 1.195 0 010 1.862l-1.383 1.104a1.197 1.197 0 00-.44 1.06l.192 1.76a1.195 1.195 0 01-1.32 1.32l-1.759-.19a1.192 1.192 0 00-1.06.44l-1.103 1.374a1.194 1.194 0 01-1.862 0l-1.107-1.379a1.196 1.196 0 00-1.06-.44l-1.76.191a1.194 1.194 0 01-1.32-1.32l.192-1.76a1.197 1.197 0 00-.44-1.06l-1.378-1.109a1.195 1.195 0 010-1.862l1.378-1.11a1.194 1.194 0 00.44-1.06l-.191-1.76a1.195 1.195 0 011.32-1.32l1.758.192a1.196 1.196 0 001.06-.44l1.108-1.37z"
          fill="url(#paint0_radial_2774_6291)"
          stroke="#D7DAF4"
          strokeWidth={1.2}
        />
        <G filter="url(#filter0_d_2774_6291)">
          <Path
            d="M5.5 9.5l1.725 1.82a.5.5 0 00.182.13.645.645 0 00.48.01.52.52 0 00.192-.12L12 7.5"
            stroke="#fff"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="crispEdges"
          />
        </G>
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2774_6291"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-124.114 11.784 4.209) scale(17.1615 19.0494)"
        >
          <Stop offset={0.047703} stopColor="#474962" />
          <Stop offset={0.5} stopColor="#8B8DA4" />
          <Stop offset={1} stopColor="#BDC3F5" />
        </RadialGradient>
        <ClipPath id="clip0_2774_6291">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GreyBadge;
