import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ArrowRight(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_3969)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.793 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.086 12 9.793 7.707a1 1 0 010-1.414z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_3969">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;
