import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
function Avatar(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 33"
      fill="none"
      {...props}
    >
      <Rect y={0.5} width={32} height={32} rx={16} fill="#42307D" />
      <G
        clipPath="url(#clip0_2990_16829)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M24.18 17.014A4.866 4.866 0 0022 16.5a.75.75 0 110-1.5 6.367 6.367 0 015.1 2.55.75.75 0 11-1.2.9 4.866 4.866 0 00-1.72-1.436zM10 16.5a4.867 4.867 0 00-3.9 1.95.75.75 0 01-1.2-.9A6.367 6.367 0 0110 15a.75.75 0 110 1.5zM16 15a3 3 0 100 6 3 3 0 000-6zm-4.5 3a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
        <Path d="M16 22.5a5.343 5.343 0 00-4.604 2.63.75.75 0 01-1.292-.76 6.844 6.844 0 0111.792 0 .75.75 0 01-1.292.76A5.343 5.343 0 0016 22.5zM22.779 10.64a2.25 2.25 0 00-2.959 1.547.75.75 0 01-1.452-.374A3.75 3.75 0 1122 16.5a.75.75 0 110-1.5 2.25 2.25 0 00.779-4.36zM10.456 10.546A2.25 2.25 0 1010 15a.75.75 0 010 1.5 3.751 3.751 0 113.632-4.688.75.75 0 01-1.452.376 2.25 2.25 0 00-1.724-1.642z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2990_16829">
          <Path fill="#fff" transform="translate(4 4.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Avatar;
