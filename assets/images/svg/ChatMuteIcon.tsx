import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChatMuteIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2851_7)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M14.623 2.236A.85.85 0 0115.1 3v18a.85.85 0 01-1.372.67l-6.52-5.07H3A1.6 1.6 0 011.4 15V9A1.6 1.6 0 013 7.4h4.208l6.52-5.071a.85.85 0 01.895-.093zM13.4 4.738L8.022 8.92A.85.85 0 017.5 9.1H3.1v5.8h4.4a.85.85 0 01.522.179l5.378 4.183V4.738z" />
        <Path d="M7.5 7.4c.47 0 .85.38.85.85v7.5a.85.85 0 01-1.7 0v-7.5c0-.47.38-.85.85-.85zM17.438 9.38a.85.85 0 011.2.075 3.85 3.85 0 010 5.09.85.85 0 01-1.276-1.124 2.15 2.15 0 000-2.842.85.85 0 01.076-1.2z" />
        <Path d="M20.215 6.866a.85.85 0 011.2.067 7.6 7.6 0 010 10.134.85.85 0 01-1.267-1.134 5.9 5.9 0 000-7.866.85.85 0 01.067-1.2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2851_7">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatMuteIcon;
