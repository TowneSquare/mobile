import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CancelIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_10679)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7.034 7.035l11.933 11.933M18.966 7.035L7.033 18.968" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_10679">
          <Path
            fill="#fff"
            transform="rotate(45 6.17 15.83)"
            d="M0 0H18V18H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CancelIcon;
