import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChatBlockUser(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2851_242)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FF4471"
      >
        <Path d="M4.93 4.93a1 1 0 011.413 0l12.728 12.727a1 1 0 11-1.414 1.414L4.929 6.343a1 1 0 010-1.414z" />
        <Path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2851_242">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatBlockUser;
