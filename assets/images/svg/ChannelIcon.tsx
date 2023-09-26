import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChannelIcon(props: SvgProps) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none" {...props}>
      <Rect width={48} height={48} rx={8} fill="#404040" />
      <G clipPath="url(#clip0_2427_10872)" stroke="#fff" strokeWidth={2}>
        <Path
          d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
          strokeMiterlimit={10}
        />
        <Path
          d="M30 18l-8 4-4 8 8-4 4-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_10872">
          <Path fill="#fff" transform="translate(8 8)" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChannelIcon;
