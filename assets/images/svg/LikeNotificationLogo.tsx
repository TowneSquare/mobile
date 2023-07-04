import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const LikeNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <G clipPath="url(#b)">
        <Path
          fill="#FF4471"
          d="M12 18.5S5.5 15 5.5 10.875A3.375 3.375 0 0 1 8.875 7.5c1.412 0 2.621.77 3.125 2 .504-1.23 1.713-2 3.125-2a3.375 3.375 0 0 1 3.375 3.375C18.5 15 12 18.5 12 18.5Z"
          opacity={0.4}
        />
        <Path
          stroke="#FF4471"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18.5S5.5 15 5.5 10.875A3.375 3.375 0 0 1 8.875 7.5c1.412 0 2.621.77 3.125 2 .504-1.23 1.713-2 3.125-2a3.375 3.375 0 0 1 3.375 3.375C18.5 15 12 18.5 12 18.5Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M4 5h16v16H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LikeNotificationLogo;
