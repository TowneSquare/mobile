import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowUp = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      stroke="#2AB576"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 8.727V3.274m0 0L2.773 6M5.5 3.274 8.226 6"
    />
  </Svg>
);
export default ArrowUp;
