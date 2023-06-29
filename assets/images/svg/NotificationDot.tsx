import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const NotificationDot = (props: SvgProps) => (
  <Svg width={10} height={26} fill="none" {...props}>
    <Circle cx={5} cy={13} r={5} fill="#9264F8" />
  </Svg>
);
export default NotificationDot;
