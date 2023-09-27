import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChannelArrowIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_8436)"
        stroke="#AAA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.688 12.375L7.312 15.75l-3.375-3.375" />
        <Path d="M14.063 2.25A6.75 6.75 0 007.313 9v6.75" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_8436">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChannelArrowIcon;
