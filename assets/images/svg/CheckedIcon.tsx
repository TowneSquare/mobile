import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CheckedIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2814_48630)">
        <Path
          d="M12.5 2.25A9.75 9.75 0 1022.25 12a9.76 9.76 0 00-9.75-9.75zm4.28 8.03l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06L11 13.94l4.72-4.72a.751.751 0 011.06 1.06z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2814_48630">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CheckedIcon;
