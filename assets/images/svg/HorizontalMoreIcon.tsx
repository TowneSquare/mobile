import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function HorizontalMoreIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2143_6643)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M3 11.991a.9.9 0 01.9-.9h16.2a.9.9 0 010 1.8H3.9a.9.9 0 01-.9-.9zM3 6.1a.9.9 0 01.9-.9h16.2a.9.9 0 110 1.8H3.9a.9.9 0 01-.9-.9zM3 17.882a.9.9 0 01.9-.9h16.2a.9.9 0 010 1.8H3.9a.9.9 0 01-.9-.9z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2143_6643">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HorizontalMoreIcon;
