import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const RepliedNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <G clipPath="url(#b)">
        <Path
          fill="#3385FF"
          d="M18.218 16.26c-1.029-1.096-3.73-3.42-7.567-3.42v3l-5-5 5-5v3c3.3 0 7.531 3.153 8 7.221a.25.25 0 0 1-.433.2Z"
          opacity={0.4}
        />
        <Path
          stroke="#3385FF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.81 16.816a2.596 2.596 0 0 1-.36-.305c-.928-.989-2.964-2.946-6.048-3.227v2.556a.75.75 0 0 1-1.28.53l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.28.53v2.453c1.635.184 3.329.95 4.715 2.105 1.6 1.333 2.858 3.239 3.125 5.492l.006.038c.006.036.014.088.02.145.005.05.013.135.008.224a.915.915 0 0 1-.037.22.779.779 0 0 1-.418.484h0a.824.824 0 0 1-.506.056c-.1-.02-.182-.054-.234-.078a1.77 1.77 0 0 1-.272-.163Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M20.151 3.84h-16v16h16z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RepliedNotificationLogo;
