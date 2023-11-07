import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function NFTIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Rect width={32} height={32} rx={16} fill="#42307D" />
      <G clipPath="url(#clip0_2990_15628)">
        <Path
          d="M16 22v3"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.875 18.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM20.125 18.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          fill="#fff"
        />
        <Path
          d="M16 8.5v3.75M17.5 20.5L16 22l-1.5-1.5M13 8.97v3.28M19 8.97v3.28"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.338 10.338a9.644 9.644 0 0111.325 0l2.056-2.367A.75.75 0 0125 8.5v8.25c0 4.556-4.031 8.25-9 8.25s-9-3.694-9-8.25V8.5a.75.75 0 011.28-.53l2.058 2.368z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_15628">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default NFTIcon;
