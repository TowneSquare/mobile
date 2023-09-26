import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SwipeArrow1(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2759_20323)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.057 26.943c.52.52 1.365.52 1.886 0l10-10c.52-.52.52-1.365 0-1.886l-10-10a1.333 1.333 0 10-1.886 1.886L20.114 16l-9.057 9.057c-.52.521-.52 1.365 0 1.886z"
          fill="#6646AE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2759_20323">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SwipeArrow1;
