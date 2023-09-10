import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ArrowDown(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_6383)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.707 9.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 14.086l4.293-4.293a1 1 0 011.414 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_6383">
          <Path fill="#fff" transform="rotate(90 12 12)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowDown;
