import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ArrowRight(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_3019_5573)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.185 16.828c.247.23.646.23.893 0l4.737-4.412a.56.56 0 000-.832l-4.737-4.412a.665.665 0 00-.893 0 .56.56 0 000 .832L14.475 12l-4.29 3.996a.56.56 0 000 .832z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3019_5573">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;
