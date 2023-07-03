import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const OfferNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <G clipPath="url(#b)">
        <Path
          fill="#F8835E"
          d="M12 18.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z"
          opacity={0.25}
        />
        <Path
          stroke="#F8835E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8.063v1.124M12 14.813v1.124M12 18.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z"
        />
        <Path
          stroke="#F8835E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.313 14.813h2.53a1.406 1.406 0 0 0 0-2.813h-1.687a1.406 1.406 0 0 1 0-2.813h2.531"
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
export default OfferNotificationLogo;
