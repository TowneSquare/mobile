import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const RepostNotificationLogo = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#fff" rx={12} />
      <Rect
        width={12}
        height={8}
        x={6}
        y={8}
        fill="#9264F8"
        opacity={0.3}
        rx={1}
      />
      <Path
        fill="#9264F8"
        fillRule="evenodd"
        stroke="#9264F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M13.607 5.158c.21-.21.552-.21.762 0l2.485 2.485c.21.21.21.551 0 .761L14.37 10.89a.539.539 0 0 1-.762-.762l2.105-2.104-2.105-2.105a.538.538 0 0 1 0-.761Z"
        clipRule="evenodd"
      />
      <Path
        fill="#9264F8"
        fillRule="evenodd"
        stroke="#9264F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M6.533 8.562a.456.456 0 0 0-.456.456v2.706a.538.538 0 0 1-1.077 0V9.018a1.533 1.533 0 0 1 1.533-1.533h9.94a.538.538 0 0 1 0 1.077h-9.94ZM10.393 13.11c.21.21.21.552 0 .762l-2.105 2.104 2.105 2.105a.538.538 0 1 1-.762.761l-2.485-2.485a.538.538 0 0 1 0-.761L9.63 13.11c.21-.21.551-.21.762 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#9264F8"
        fillRule="evenodd"
        stroke="#9264F8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M18.462 11.738c.297 0 .538.24.538.538v2.706a1.533 1.533 0 0 1-1.533 1.533h-9.94a.538.538 0 1 1 0-1.077h9.94a.456.456 0 0 0 .456-.456v-2.706c0-.297.241-.538.539-.538Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={12} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RepostNotificationLogo;
