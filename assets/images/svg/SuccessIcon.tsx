import * as React from 'react';
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function SuccessIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 66 66"
      fill="none"
      {...props}
    >
      <Circle
        cx={33}
        cy={33}
        r={31}
        fill="url(#paint0_linear_2885_8902)"
        stroke="#32D583"
        strokeWidth={3.875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.481 37.274l6.645 5.958a2.104 2.104 0 001.689.93 2.116 2.116 0 001.741-.828l15.759-19.838"
        stroke="#fff"
        strokeWidth={6.88889}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2885_8902"
          x1={33}
          y1={2}
          x2={33}
          y2={64}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#039855" />
          <Stop offset={1} stopColor="#027A48" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SuccessIcon;
