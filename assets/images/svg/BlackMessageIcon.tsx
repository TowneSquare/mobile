import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function BlackMessageIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2720_4672)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#121212"
      >
        <Path d="M4.5 6.25v14.197l2.592-2.273.016-.013a1.75 1.75 0 011.126-.411H20.5V6.25h-16zM3.013 4.763A1.75 1.75 0 014.25 4.25h16.5A1.75 1.75 0 0122.5 6v12a1.75 1.75 0 01-1.75 1.75H8.329l-2.937 2.575-.015.013A1.75 1.75 0 012.5 21.001V6c0-.464.184-.91.513-1.237z" />
        <Path d="M8.5 10.5a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zM8.5 13.5a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2720_4672">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BlackMessageIcon;
