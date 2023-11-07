import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const XBG = (props: SvgProps) => (
  <Svg width={props.size} height={props.size} fill="none" {...props}>
    <Rect width={44} height={44} y={0.5} fill="black" rx={22} />
    <Path
      fill="white"
      d="M10.0585 11.2686L19.3246 23.6582L10 33.7316H12.0986L20.2623 24.9122L26.8584 33.7316H34L24.2125 20.645L32.8918 11.2686H30.7932L23.2748 19.391L17.2001 11.2686H10.0585ZM13.1447 12.8144H16.4255L30.9134 32.1855H27.6325L13.1447 12.8144Z"
    />
  </Svg>
);
export default XBG;
