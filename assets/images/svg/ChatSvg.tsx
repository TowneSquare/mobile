import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ChatSvg = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <G
      clipPath="url(#clip0_2732_9990)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#666"
    >
      <Path d="M20.333 6.25v14.197l-2.592-2.273-.015-.013a1.75 1.75 0 00-1.127-.411H4.333V6.25h16zm1.487-1.487a1.75 1.75 0 00-1.237-.513h-16.5A1.75 1.75 0 002.333 6v12a1.75 1.75 0 001.75 1.75h12.421l2.937 2.575.015.013a1.75 1.75 0 002.877-1.337V6c0-.464-.184-.91-.513-1.237z" />
      <Path d="M16.333 10.5a1 1 0 00-1-1h-6a1 1 0 100 2h6a1 1 0 001-1zM16.333 13.5a1 1 0 00-1-1h-6a1 1 0 100 2h6a1 1 0 001-1z" />
    </G>
    <Defs>
      <ClipPath id="clip0_2732_9990">
        <Path
          fill="#fff"
          transform="matrix(-1 0 0 1 24.333 0)"
          d="M0 0H24V24H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ChatSvg;
