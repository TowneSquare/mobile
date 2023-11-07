import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwapIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Rect width={32} height={32} rx={16} fill="#42307D" />
      <G
        clipPath="url(#clip0_2990_15613)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M22 10s-2.25-2.25-6-2.25C10.75 7.75 7.75 13 7.75 13M10 22s2.25 2.25 6 2.25c5.25 0 8.25-5.25 8.25-5.25" />
        <Path d="M12.25 13h-4.5V8.5M19.75 19h4.5v4.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_15613">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwapIcon;
