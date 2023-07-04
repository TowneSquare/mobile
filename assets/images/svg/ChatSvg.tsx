import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const ChatSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#666" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M20 6.25v14.197l-2.592-2.273-.016-.013a1.75 1.75 0 0 0-1.126-.411H4V6.25h16Zm1.487-1.487a1.75 1.75 0 0 0-1.237-.513H3.75A1.75 1.75 0 0 0 2 6v12a1.75 1.75 0 0 0 1.75 1.75h12.421l2.937 2.575.015.013A1.75 1.75 0 0 0 22 21.001V6c0-.464-.184-.91-.513-1.237Z" />
      <Path d="M16 10.5a1 1 0 0 0-1-1H9a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1ZM16 13.5a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M24 0H0v24h24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ChatSvg;
