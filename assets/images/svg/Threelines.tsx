import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Threelines = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M3 11.991a.9.9 0 0 1 .9-.9h16.2a.9.9 0 0 1 0 1.8H3.9a.9.9 0 0 1-.9-.9ZM3 6.1a.9.9 0 0 1 .9-.9h16.2a.9.9 0 1 1 0 1.8H3.9a.9.9 0 0 1-.9-.9ZM3 17.882a.9.9 0 0 1 .9-.9h16.2a.9.9 0 0 1 0 1.8H3.9a.9.9 0 0 1-.9-.9Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Threelines;
