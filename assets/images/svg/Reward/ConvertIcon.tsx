import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ConvertIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 20"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2990_17381)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.5 14.75s-1.688 1.781-4.5 1.781c-3.938 0-6.188-4.156-6.188-4.156M4.5 5.25S6.188 3.469 9 3.469c3.938 0 6.188 4.156 6.188 4.156" />
        <Path d="M6.188 12.375H2.813v3.563M11.813 7.625h3.374V4.062" />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_17381">
          <Path fill="#fff" transform="rotate(-180 9 9.75)" d="M0 0H18V19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ConvertIcon;
