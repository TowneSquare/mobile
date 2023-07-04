import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const MentionNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <G clipPath="url(#b)">
        <Path
          fill="#FF82D4"
          d="M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z"
          opacity={0.3}
        />
        <Path
          stroke="#FF82D4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14.813a2.813 2.813 0 1 0 0-5.626 2.813 2.813 0 0 0 0 5.626Z"
        />
        <Path
          stroke="#FF82D4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.938 17.625c-1.07.71-2.558 1.125-3.938 1.125A6.75 6.75 0 1 1 18.75 12c0 1.553-.563 2.813-1.969 2.813-1.406 0-1.968-1.26-1.968-2.813V9.187"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M3 3h18v18H3z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MentionNotificationLogo;
