import * as React from 'react';
import Svg, { Circle, G, Defs, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function RadioButton(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 26"
      fill="none"
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={11.25}
        fill="#9264F8"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <G filter="url(#filter0_d_2480_1072)">
        <Circle cx={12} cy={12} r={5} fill="#fff" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default RadioButton;
