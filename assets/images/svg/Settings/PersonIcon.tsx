import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PersonIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.314 4.497a5.112 5.112 0 117.23 7.23 5.112 5.112 0 01-7.23-7.23zM11.93 5a3.112 3.112 0 100 6.225 3.112 3.112 0 000-6.225z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.93 14.47A5.73 5.73 0 006.2 20.2a1 1 0 11-2 0 7.73 7.73 0 1115.459 0 1 1 0 11-2 0 5.73 5.73 0 00-5.73-5.73z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PersonIcon;
