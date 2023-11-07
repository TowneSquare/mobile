import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ArrowRight(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2990_15662)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.185 17.328c.247.23.646.23.893 0l4.737-4.412a.56.56 0 000-.832l-4.737-4.412a.665.665 0 00-.893 0 .56.56 0 000 .832l4.29 3.996-4.29 3.996a.56.56 0 000 .832z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_15662">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;
