import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ExploreIcons(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2465_8662)" stroke="#fff" strokeWidth={2}>
        <Path d="M12.5 21.5a9 9 0 100-18 9 9 0 000 18z" strokeMiterlimit={10} />
        <Path
          d="M17 8l-6 3-3 6 6-3 3-6z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2465_8662">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ExploreIcons;
