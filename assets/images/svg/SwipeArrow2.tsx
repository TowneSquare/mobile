import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwipeArrow2(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2759_20324)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.675 23.575a1.167 1.167 0 001.65 0l8.75-8.75a1.167 1.167 0 000-1.65l-8.75-8.75a1.167 1.167 0 00-1.65 1.65L17.6 14l-7.925 7.925a1.167 1.167 0 000 1.65z"
          fill="#9264F8"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2759_20324">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeArrow2;
