import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Camera = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M11.168 4.445A1 1 0 0 1 12 4h8a1 1 0 0 1 .832.445L22.535 7H26a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h3.465l1.703-2.555ZM12.535 6l-1.703 2.555A1 1 0 0 1 10 9H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-4a1 1 0 0 1-.832-.445L19.465 6h-6.93Z" />
      <Path d="M16 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-5.5 3.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Camera;
