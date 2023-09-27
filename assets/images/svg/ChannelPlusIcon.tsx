import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChanelPlusIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Rect width={48} height={48} rx={8} fill="#404040" />
      <G
        clipPath="url(#clip0_2427_10874)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M23.866 11.3c.665 0 1.205.539 1.205 1.204v22.992a1.204 1.204 0 01-2.409 0V12.504c0-.665.54-1.204 1.204-1.204z" />
        <Path d="M11.166 24c0-.665.539-1.204 1.204-1.204h22.992a1.204 1.204 0 010 2.408H12.37c-.665 0-1.204-.539-1.204-1.204z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_10874">
          <Path fill="#fff" transform="translate(8 8)" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChanelPlusIcon;
