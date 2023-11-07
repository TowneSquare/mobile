import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function TradeIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 33"
      fill="none"
      {...props}
    >
      <Rect y={0.5} width={32} height={32} rx={16} fill="#42307D" />
      <G
        clipPath="url(#clip0_2990_16857)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M24.625 23.688H7.375V9.313" />
        <Path d="M22.469 11.469L16 17.938l-2.875-2.875-5.75 5.75" />
        <Path d="M22.469 15.063v-3.594h-3.594" />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_16857">
          <Path fill="#fff" transform="translate(4.5 5)" d="M0 0H23V23H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TradeIcon;
