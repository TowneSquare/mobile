import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const RecentSearchIcon = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={31} height={31} x={0.5} y={0.5} fill="#222" rx={15.5} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M8.115 11.948a6.93 6.93 0 1 1 12.854 5.187 6.93 6.93 0 0 1-12.854-5.187Zm4.412-2.15a5.153 5.153 0 1 0 4.03 9.486 5.153 5.153 0 0 0-4.03-9.485Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.185 18.185a.889.889 0 0 1 1.258 0l4.685 4.687a.889.889 0 0 1-1.257 1.256l-4.686-4.686a.889.889 0 0 1 0-1.257Z"
      clipRule="evenodd"
    />
    <Rect width={31} height={31} x={0.5} y={0.5} stroke="#666" rx={15.5} />
  </Svg>
);
export default RecentSearchIcon;
