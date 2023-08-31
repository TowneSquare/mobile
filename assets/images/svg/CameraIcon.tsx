import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CameraIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 33"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_2966)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M26 26.666H6a2 2 0 01-2-2v-14a2 2 0 012-2h4l2-3h8l2 3h4a2 2 0 012 2v14a2 2 0 01-2 2z" />
        <Path d="M16 21.666a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_2966">
          <Path fill="#fff" transform="translate(0 .666)" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CameraIcon;
