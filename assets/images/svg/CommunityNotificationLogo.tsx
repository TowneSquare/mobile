import * as React from 'react';
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from 'react-native-svg';
const CommunityNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <G clipPath="url(#b)">
        <Path
          fill="#17AC76"
          d="M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          opacity={0.4}
        />
        <Path
          stroke="#17AC76"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11.5a3.744 3.744 0 0 1 3 1.5M5 13a3.744 3.744 0 0 1 3-1.5M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        />
        <Path
          stroke="#17AC76"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.5 17.5a4.062 4.062 0 0 1 7 0M14.063 9A2 2 0 1 1 16 11.5M8 11.5A2 2 0 1 1 9.938 9"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M4 4h16v16H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CommunityNotificationLogo;
