import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function PlusIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2636_501)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#B882FF"
      >
        <Path d="M11.9 2.475c.498 0 .903.404.903.903v17.244a.903.903 0 11-1.807 0V3.378c0-.499.405-.903.903-.903z" />
        <Path d="M2.374 12c0-.499.405-.903.903-.903h17.245a.903.903 0 110 1.806H3.277A.903.903 0 012.374 12z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2636_501">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PlusIcon;
