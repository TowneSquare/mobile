import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FollowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.726 4.097a5.112 5.112 0 1 1 7.23 7.23 5.112 5.112 0 0 1-7.23-7.23Zm3.615.503a3.112 3.112 0 1 0 0 6.225 3.112 3.112 0 0 0 0-6.225Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.341 14.07a5.73 5.73 0 0 0-5.73 5.73 1 1 0 1 1-2 0 7.73 7.73 0 1 1 15.46 0 1 1 0 1 1-2 0 5.73 5.73 0 0 0-5.73-5.73ZM19.81 6.089a1 1 0 0 1 1 1v5.982a1 1 0 1 1-2 0V7.089a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M23.8 10.08a1 1 0 0 1-1 1h-5.982a1 1 0 1 1 0-2H22.8a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FollowIcon;
