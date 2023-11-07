import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ShareIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2998_16493)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#B882FF"
      >
        <Path d="M6.5 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM17 16.75a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM17 3.25a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z" />
        <Path d="M15.318 6.331a1 1 0 01-.3 1.382L9.564 11.22a1 1 0 11-1.082-1.682l5.455-3.506a1 1 0 011.381.3zM8.182 13.081a1 1 0 011.382-.3l5.454 3.506a1 1 0 01-1.082 1.682l-5.454-3.506a1 1 0 01-.3-1.382z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2998_16493">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ShareIcon;
