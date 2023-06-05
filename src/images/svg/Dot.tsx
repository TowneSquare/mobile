import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const Dot = (props: SvgProps) => (
  <Svg width={4} height={4} fill="none" {...props}>
    <Circle cx={2} cy={2} r={2} fill="#AAA" />
  </Svg>
);
export default Dot;
