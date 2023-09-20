import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const DelIcon = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2672_13010)">
      <Path
        d="M10 1.875A8.125 8.125 0 1018.125 10 8.133 8.133 0 0010 1.875zm2.942 10.183a.624.624 0 11-.884.884L10 10.884l-2.058 2.058a.624.624 0 11-.884-.884L9.116 10 7.058 7.942a.625.625 0 01.884-.884L10 9.116l2.058-2.058a.626.626 0 01.884.884L10.884 10l2.058 2.058z"
        fill="#AAA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2672_13010">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DelIcon;
