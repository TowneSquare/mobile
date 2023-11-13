import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ShareCodeIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_3049_1182)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M6.5 10.032a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM17 16.782a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM17 3.282a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z" />
        <Path d="M15.318 6.363a1 1 0 01-.3 1.382L9.563 11.25A1 1 0 118.482 9.57l5.454-3.507a1 1 0 011.382.3zM8.181 13.113a1 1 0 011.382-.3l5.455 3.506A1 1 0 0113.936 18l-5.454-3.506a1 1 0 01-.3-1.382z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3049_1182">
          <Path fill="#fff" transform="translate(.5 .032)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShareCodeIcon;
