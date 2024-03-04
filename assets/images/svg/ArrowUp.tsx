import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowUp = (props: SvgProps) => (
  <Svg width={props.size} height={props.size} fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 8.727V3.274m0 0L2.773 6M5.5 3.274 8.226 6"
    />
  </Svg>
);
export default ArrowUp;
