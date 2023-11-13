import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ReSwap(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 46 46"
      fill="none"
      {...props}
    >
      <Rect width={46} height={46} rx={12.65} fill="#010101" />
      <Rect
        x={4.6001}
        y={4.59998}
        width={36.8}
        height={36.8}
        rx={9.2}
        fill="#222"
      />
      <G
        clipPath="url(#clip0_4427_127330)"
        stroke="#CCC"
        strokeWidth={1.91667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17.25 17.25s2.156-2.156 5.75-2.156c5.031 0 7.906 5.031 7.906 5.031M28.75 28.75s-2.156 2.156-5.75 2.156c-5.031 0-7.906-5.031-7.906-5.031" />
        <Path d="M26.594 20.125h4.312v-4.313M19.406 25.875h-4.312v4.313" />
      </G>
      <Defs>
        <ClipPath id="clip0_4427_127330">
          <Path
            fill="#fff"
            transform="translate(11.5 11.5)"
            d="M0 0H23V23H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ReSwap;
