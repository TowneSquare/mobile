//@ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const Badge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={101}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        stroke="#D7DAF4"
        strokeWidth={6.667}
        d="M44.55 6.373a6.637 6.637 0 0 1 10.344 0l6.156 7.663a6.633 6.633 0 0 0 5.888 2.444l9.773-1.063a6.633 6.633 0 0 1 6.996 4.402c.329.94.443 1.942.333 2.931l-1.063 9.778a6.64 6.64 0 0 0 2.443 5.891l7.66 6.16a6.64 6.64 0 0 1 1.825 8.043 6.639 6.639 0 0 1-1.825 2.305l-7.684 6.132a6.649 6.649 0 0 0-2.443 5.895l1.063 9.778a6.64 6.64 0 0 1-4.4 7.001 6.63 6.63 0 0 1-2.93.332l-9.772-1.063a6.626 6.626 0 0 0-5.888 2.444l-6.133 7.635a6.634 6.634 0 0 1-8.038 1.828 6.633 6.633 0 0 1-2.304-1.828l-6.153-7.66a6.64 6.64 0 0 0-5.892-2.444l-9.772 1.064a6.626 6.626 0 0 1-7-4.4 6.636 6.636 0 0 1-.33-2.934l1.063-9.777a6.647 6.647 0 0 0-2.443-5.896L6.369 54.88a6.636 6.636 0 0 1-1.828-8.043A6.637 6.637 0 0 1 6.37 44.53l7.655-6.16a6.632 6.632 0 0 0 2.443-5.89l-1.063-9.778a6.64 6.64 0 0 1 4.399-7.002 6.63 6.63 0 0 1 2.93-.332l9.773 1.064a6.641 6.641 0 0 0 5.892-2.445l6.153-7.614Z"
      />
      <G filter="url(#c)">
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={8.333}
          d="m30.556 50.005 9.583 10.11a2.77 2.77 0 0 0 1.01.72c.407.173.86.27 1.324.28.464.01.925-.064 1.343-.22a2.89 2.89 0 0 0 1.065-.67l21.786-21.331"
          shapeRendering="crispEdges"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-53.47156 -78.93562 87.61912 -59.35384 82.825 87.923)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.048} stopColor="#474962" />
        <Stop offset={0.5} stopColor="#8B8DA4" />
        <Stop offset={1} stopColor="#BDC3F5" />
      </RadialGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .005h100v100H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Badge;
