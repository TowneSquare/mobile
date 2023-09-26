import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwipeArrowIcon(props: SvgProps) {
  return (
    <Svg
    
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_10605)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17 9.75l4.5 4.5-4.5 4.5" />
        <Path d="M3.5 5.25a9 9 0 009 9h9" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_10605">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeArrowIcon;
