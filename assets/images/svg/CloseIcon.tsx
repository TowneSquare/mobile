import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CloseIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Rect
        width={36}
        height={36}
        rx={18}
        fill="#000"
        fillOpacity={0.7}
      />
      <G
        clipPath="url(#clip0_2427_3253)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M24.214 11.785a.833.833 0 010 1.179l-11.25 11.25a.833.833 0 01-1.178-1.179l11.25-11.25a.833.833 0 011.178 0z" />
        <Path d="M11.786 11.785a.833.833 0 011.178 0l11.25 11.25a.833.833 0 01-1.178 1.179l-11.25-11.25a.833.833 0 010-1.179z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_3253">
          <Path fill="#fff" transform="translate(8 8)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloseIcon;
