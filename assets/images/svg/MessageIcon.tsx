import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const MessageIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <G fill="#121212" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M4.5 6.25v14.197l2.592-2.273.016-.013a1.75 1.75 0 0 1 1.126-.411H20.5V6.25h-16ZM3.013 4.763A1.75 1.75 0 0 1 4.25 4.25h16.5A1.75 1.75 0 0 1 22.5 6v12a1.75 1.75 0 0 1-1.75 1.75H8.329l-2.937 2.575-.015.013A1.75 1.75 0 0 1 2.5 21.001V6c0-.464.184-.91.513-1.237Z" />
      <Path d="M8.5 10.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM8.5 13.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MessageIcon;
