import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function WhiteArrowUp(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 18"
      fill="none"
      {...props}
    >
      <Path
        d="M8 17V1M1.454 7.545L8 1l6.545 6.545"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default WhiteArrowUp;
