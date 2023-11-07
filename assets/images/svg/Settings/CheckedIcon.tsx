import * as React from 'react';
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function CheckedIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={9}
        fill="url(#paint0_linear_3115_430)"
        stroke="#32D583"
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.075 13.24l1.93 1.73a.61.61 0 00.772.211.611.611 0 00.223-.18l4.575-5.76"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3115_430"
          x1={12}
          y1={3}
          x2={12}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#039855" />
          <Stop offset={1} stopColor="#027A48" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CheckedIcon;
