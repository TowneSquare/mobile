import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function AddIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2465_5619)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M11.9 2.975c.498 0 .903.404.903.903v17.244a.903.903 0 11-1.807 0V3.878c0-.499.405-.903.903-.903z" />
        <Path d="M2.374 12.5c0-.499.405-.903.903-.903h17.245a.903.903 0 110 1.806H3.277a.903.903 0 01-.903-.903z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2465_5619">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AddIcon;
