import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PostCamera = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M7.918 3.195a1 1 0 0 1 .832-.445h6a1 1 0 0 1 .832.445L16.785 5h2.465a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V7.5A2.5 2.5 0 0 1 4.25 5h2.465l1.203-1.805ZM9.285 4.75 8.082 6.555A1 1 0 0 1 7.25 7h-3a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5h-3a1 1 0 0 1-.832-.445L14.215 4.75h-4.93Z" />
      <Path d="M11.75 10a2.375 2.375 0 1 0 0 4.75 2.375 2.375 0 0 0 0-4.75Zm-4.375 2.375a4.375 4.375 0 1 1 8.75 0 4.375 4.375 0 0 1-8.75 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PostCamera;
