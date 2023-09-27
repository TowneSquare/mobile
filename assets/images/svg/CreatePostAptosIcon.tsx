import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CreatePostAptosIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2672_14440)"
        stroke="#B882FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <Path d="M8.25 12c0 3.512 1.25 6.649 3.214 8.765a.73.73 0 001.072 0C14.5 18.649 15.75 15.512 15.75 12c0-3.512-1.25-6.649-3.214-8.765a.73.73 0 00-1.072 0C9.5 5.351 8.25 8.488 8.25 12zM3.512 9h16.976M3.512 15h16.976" />
      </G>
      <Defs>
        <ClipPath id="clip0_2672_14440">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CreatePostAptosIcon;
