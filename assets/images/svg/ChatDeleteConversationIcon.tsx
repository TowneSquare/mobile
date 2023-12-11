import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

function ChatDeleteConversationIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_3244_19464)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6zM9.75 9.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM14.25 9.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
        <Path d="M5.25 5.25A.75.75 0 016 6v14.25h12V6a.75.75 0 011.5 0v14.25a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V6a.75.75 0 01.75-.75z" />
        <Path d="M8.159 2.909A2.25 2.25 0 019.75 2.25h4.5A2.25 2.25 0 0116.5 4.5V6A.75.75 0 0115 6V4.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 4.5V6a.75.75 0 01-1.5 0V4.5c0-.597.237-1.169.659-1.591z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3244_19464">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatDeleteConversationIcon;
