import * as React from 'react';
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from 'react-native-svg';
const FollowNotificationlogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <Path
        stroke="#48B9B2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.25 8.417a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0v0ZM5.5 16.5a4.5 4.5 0 1 1 9 0"
      />
      <Path
        fill="#48B9B2"
        d="M7 8.75a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z"
        opacity={0.4}
      />
      <Path
        stroke="#19C2B8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8v4M19 10h-4"
      />
      <Path
        fill="#48B9B2"
        d="M5 17.5c0-1.326.974-2.598 1.818-3.536C7.662 13.027 8.806 12.5 10 12.5c1.193 0 2.338.527 3.182 1.464.844.938.818 2.21.818 3.536"
        opacity={0.4}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FollowNotificationlogo;
