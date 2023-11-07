import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChatDeleteConversationIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1507_33050)" fill="#fff">
        <Path
          opacity={0.2}
          d="M46.875 13.125V48.75A1.875 1.875 0 0145 50.625H15a1.875 1.875 0 01-1.875-1.875V13.125h33.75z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.875 13.125a1.5 1.5 0 011.5-1.5h41.25a1.5 1.5 0 010 3H9.375a1.5 1.5 0 01-1.5-1.5zM24.375 22.875a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0v-15a1.5 1.5 0 011.5-1.5zM35.625 22.875a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0v-15a1.5 1.5 0 011.5-1.5z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.125 11.625a1.5 1.5 0 011.5 1.5V48.75a.375.375 0 00.375.375h30a.375.375 0 00.375-.375V13.125a1.5 1.5 0 013 0V48.75A3.375 3.375 0 0145 52.125H15a3.375 3.375 0 01-3.375-3.375V13.125a1.5 1.5 0 011.5-1.5z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.663 5.663a5.25 5.25 0 013.712-1.538h11.25a5.25 5.25 0 015.25 5.25v3.75a1.5 1.5 0 01-3 0v-3.75a2.25 2.25 0 00-2.25-2.25h-11.25a2.25 2.25 0 00-2.25 2.25v3.75a1.5 1.5 0 01-3 0v-3.75a5.25 5.25 0 011.538-3.712z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1507_33050">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatDeleteConversationIcon;
