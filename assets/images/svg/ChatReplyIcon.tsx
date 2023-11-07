import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CharReplyIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2874_378)"
        stroke="#AAA"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.75 8.125l3.75 3.75-3.75 3.75" />
        <Path d="M2.5 4.375a7.5 7.5 0 007.5 7.5h7.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_2874_378">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CharReplyIcon;
