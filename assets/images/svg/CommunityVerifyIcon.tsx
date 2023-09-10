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

function CommunityVerifyIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <Path
        d="M44.55 6.363a6.637 6.637 0 0110.344 0l6.156 7.663a6.633 6.633 0 005.888 2.445l9.773-1.064a6.633 6.633 0 016.996 4.402c.329.94.443 1.942.333 2.931l-1.063 9.778a6.64 6.64 0 002.443 5.891l7.66 6.16a6.64 6.64 0 011.825 8.043 6.639 6.639 0 01-1.825 2.305l-7.684 6.132a6.648 6.648 0 00-2.443 5.895l1.063 9.778a6.64 6.64 0 01-4.4 7 6.63 6.63 0 01-2.93.333l-9.772-1.063a6.625 6.625 0 00-5.888 2.444l-6.133 7.635a6.634 6.634 0 01-8.038 1.828 6.633 6.633 0 01-2.304-1.828l-6.153-7.66a6.64 6.64 0 00-5.892-2.444l-9.772 1.064a6.626 6.626 0 01-7-4.4 6.636 6.636 0 01-.33-2.934l1.063-9.777a6.647 6.647 0 00-2.443-5.896l-7.655-6.156a6.636 6.636 0 01-1.828-8.043A6.637 6.637 0 016.37 44.52l7.655-6.16a6.632 6.632 0 002.443-5.89l-1.063-9.778a6.64 6.64 0 014.399-7.002 6.629 6.629 0 012.93-.332l9.773 1.064a6.641 6.641 0 005.892-2.445l6.153-7.614z"
        fill="url(#paint0_radial_2427_8704)"
        stroke="#D7DAF4"
        strokeWidth={6.66667}
      />
      <G filter="url(#filter0_d_2427_8704)">
        <Path
          d="M30.556 50l9.583 10.11a2.77 2.77 0 001.01.719c.407.174.86.27 1.324.28.464.012.925-.064 1.343-.218a2.891 2.891 0 001.065-.671l21.786-21.331"
          stroke="#fff"
          strokeWidth={8.33333}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2427_8704"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-53.47156 -78.93562 87.61912 -59.35384 82.825 87.912)"
        >
          <Stop offset={0.047703} stopColor="#474962" />
          <Stop offset={0.5} stopColor="#8B8DA4" />
          <Stop offset={1} stopColor="#BDC3F5" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default CommunityVerifyIcon;
