import * as React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

function DefaultButton(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Circle cx={12} cy={12} r={11.25} stroke="#fff" strokeWidth={1.5} />
    </Svg>
  );
}

export default DefaultButton;
