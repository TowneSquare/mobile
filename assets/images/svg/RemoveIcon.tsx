import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function RemoveIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2636_9003)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M16.215 3.786a.833.833 0 010 1.178l-11.25 11.25a.833.833 0 01-1.179-1.178l11.25-11.25a.833.833 0 011.179 0z" />
        <Path d="M3.786 3.786a.833.833 0 011.179 0l11.25 11.25a.833.833 0 01-1.179 1.178L3.786 4.964a.833.833 0 010-1.178z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2636_9003">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RemoveIcon;
