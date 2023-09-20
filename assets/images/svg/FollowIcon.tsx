import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FollowIcon = (props: SvgProps) => (
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
      d="M5.726 4.097a5.112 5.112 0 117.23 7.23 5.112 5.112 0 01-7.23-7.23zM9.34 4.6a3.112 3.112 0 100 6.224 3.112 3.112 0 000-6.224z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.34 14.07a5.73 5.73 0 00-5.729 5.73 1 1 0 11-2 0 7.73 7.73 0 0115.46 0 1 1 0 11-2 0 5.73 5.73 0 00-5.73-5.73zM19.809 6.088a1 1 0 011 1v5.982a1 1 0 11-2 0V7.088a1 1 0 011-1z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.8 10.08a1 1 0 01-1 1h-5.982a1 1 0 110-2H22.8a1 1 0 011 1z"
      fill="#fff"
    />
  </Svg>
);
export default FollowIcon;
