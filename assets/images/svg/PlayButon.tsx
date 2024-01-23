import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function PlayButton(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_3416_233)">
        <Path
          d="M30 16a1.968 1.968 0 01-.95 1.689L11.04 28.706a2 2 0 01-2.767-.688A1.983 1.983 0 018 27.016V4.984a1.982 1.982 0 011.015-1.728 2 2 0 012.025.038L29.05 14.31a1.968 1.968 0 01.95 1.69z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3416_233">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PlayButton;
