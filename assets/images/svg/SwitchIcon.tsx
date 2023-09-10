import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwitchIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_4395)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9.75 3.281a8.954 8.954 0 014.5 0M3.327 9.59a8.957 8.957 0 012.25-3.897M5.577 18.306a8.957 8.957 0 01-2.25-3.898M14.25 20.719a8.956 8.956 0 01-4.5 0M20.673 14.41a8.958 8.958 0 01-2.25 3.896M18.423 5.693a8.958 8.958 0 012.25 3.898" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_4395">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwitchIcon;
