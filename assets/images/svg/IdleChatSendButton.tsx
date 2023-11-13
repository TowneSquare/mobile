import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function IdleChatSendButton(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        opacity={0.4}
        clipPath="url(#clip0_2774_3847)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M4.335 1.262a1.75 1.75 0 011.022.215l.007.004 15.746 8.983a1.75 1.75 0 010 3.055L5.353 22.53a1.75 1.75 0 01-2.497-2.116l2.88-8.426-2.884-8.404a1.75 1.75 0 011.483-2.323zm.619 2.287l2.696 7.857a1.74 1.74 0 010 1.165l-2.694 7.883 14.795-8.462L4.954 3.549z" />
        <Path d="M5.75 12a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2774_3847">
          <Path fill="#AAA" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IdleChatSendButton;
