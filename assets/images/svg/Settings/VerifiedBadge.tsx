//@ts-nocheck
import * as React from 'react';
import Svg, {
  Path,
  G,
  Defs,
  RadialGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function VerifiedBadge(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 101 100"
      fill="none"
      {...props}
    >
      <Path
        d="M45.051 6.367A6.638 6.638 0 0153.09 4.54a6.637 6.637 0 012.305 1.827l6.157 7.663a6.633 6.633 0 005.888 2.444l9.772-1.063a6.632 6.632 0 016.996 4.402c.33.94.443 1.942.333 2.931l-1.062 9.778a6.64 6.64 0 002.443 5.891l7.659 6.16a6.64 6.64 0 010 10.348l-7.684 6.132a6.649 6.649 0 00-2.443 5.895l1.063 9.778a6.64 6.64 0 01-4.399 7 6.63 6.63 0 01-2.93.333l-9.773-1.063a6.625 6.625 0 00-5.888 2.444l-6.132 7.635a6.633 6.633 0 01-10.343 0l-6.152-7.66a6.641 6.641 0 00-5.892-2.444l-9.773 1.064a6.626 6.626 0 01-6.999-4.4 6.637 6.637 0 01-.33-2.934l1.062-9.777a6.647 6.647 0 00-2.443-5.896L6.87 54.872a6.636 6.636 0 01-1.827-8.043 6.637 6.637 0 011.827-2.305l7.655-6.16a6.632 6.632 0 002.443-5.89l-1.062-9.778a6.64 6.64 0 014.398-7.002 6.63 6.63 0 012.931-.332l9.773 1.063a6.641 6.641 0 005.892-2.444l6.152-7.614z"
        fill="url(#paint0_radial_3019_5608)"
        stroke="#D7DAF4"
        strokeWidth={2.67}
      />
      <G filter="url(#filter0_d_3019_5608)">
        <Path
          d="M31.055 50l9.584 10.11c.258.299.604.545 1.01.72.407.173.86.27 1.324.28.464.01.925-.064 1.343-.22a2.89 2.89 0 001.064-.67L67.167 38.89"
          stroke="#fff"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_3019_5608"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-53.47156 -78.93562 87.61912 -59.35384 83.325 87.916)"
        >
          <Stop offset={0.047703} stopColor="#474962" />
          <Stop offset={0.5} stopColor="#8B8DA4" />
          <Stop offset={1} stopColor="#BDC3F5" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default VerifiedBadge;
