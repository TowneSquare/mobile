import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwipeArrow3(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2759_20325)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.293 20.207a1 1 0 001.414 0l7.5-7.5a1 1 0 000-1.414l-7.5-7.5a1 1 0 00-1.414 1.414L15.086 12l-6.793 6.793a1 1 0 000 1.414z"
          fill="#B882FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2759_20325">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeArrow3;
