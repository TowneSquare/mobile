import * as React from 'react';
import Svg, { Rect, SvgProps } from 'react-native-svg';

function UncheckedBoxIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Rect
        x={0.75}
        y={0.75}
        width={22.5}
        height={22.5}
        rx={4.25}
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default UncheckedBoxIcon;
