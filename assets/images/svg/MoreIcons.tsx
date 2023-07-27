import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const MoreIcons = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M12.25 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM5.875 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM18.625 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MoreIcons;
