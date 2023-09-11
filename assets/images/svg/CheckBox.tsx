import * as React from 'react';
import Svg, { Rect, G, Path, Defs, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CheckBox(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 30"
      fill="none"
      {...props}
    >
      <Rect
        x={2.75}
        y={0.75}
        width={22.5}
        height={22.5}
        rx={4.25}
        fill="#9264F8"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <G filter="url(#filter0_d_2618_6019)">
        <Path
          d="M9 11.182L12.889 15 19 9"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default CheckBox;
