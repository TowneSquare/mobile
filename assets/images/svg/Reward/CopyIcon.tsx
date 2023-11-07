import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CopyIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2990_16564)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M7.25 3.782a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-4.5a1 1 0 010-2h3.5v-10h-10v3.5a1 1 0 11-2 0v-4.5z" />
        <Path d="M2.75 8.282a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12zm2 1v10h10v-10h-10z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_16564">
          <Path fill="#fff" transform="translate(0 .032)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CopyIcon;
