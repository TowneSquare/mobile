import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SelectedMemberIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_6395)">
        <Path
          d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm4.28 8.03l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.06z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_6395">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SelectedMemberIcon;
