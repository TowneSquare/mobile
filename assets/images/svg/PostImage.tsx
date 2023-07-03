import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PostImage = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M4.75 4.75v14.5h14.5V4.75H4.75Zm-2-.25c0-.966.784-1.75 1.75-1.75h15c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 0 1-1.75 1.75h-15a1.75 1.75 0 0 1-1.75-1.75v-15Z" />
      <Path d="M9 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6.5 9a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16.125 10.853l3.418 3.419a1 1 0 1 0 1.414-1.414l-3.594-3.595a1.75 1.75 0 0 0-2.476 0l-10.28 10.28a1 1 0 0 0 1.415 1.414l10.103-10.104Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PostImage;
