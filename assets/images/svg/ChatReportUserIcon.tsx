import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChatReportUserIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2851_1909)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M3.75 3.5a1 1 0 011 1v15.75a1 1 0 11-2 0V4.5a1 1 0 011-1z" />
        <Path d="M16.103 4.969c1.069.127 2.197-.103 3.492-1.225a1 1 0 011.655.756v11.25a1 1 0 01-.345.756c-1.705 1.476-3.39 1.896-5.04 1.698-1.53-.182-2.975-.897-4.235-1.521l-.074-.037c-1.348-.667-2.502-1.226-3.659-1.365-1.069-.127-2.197.103-3.492 1.225a1 1 0 01-1.31-1.512c1.705-1.476 3.39-1.896 5.04-1.698 1.53.183 2.975.898 4.235 1.521l.074.037c1.348.667 2.502 1.226 3.659 1.365.973.116 1.994-.064 3.147-.944v-8.9a5.877 5.877 0 01-3.384.58c-1.532-.183-2.976-.898-4.236-1.522l-.074-.037C10.208 4.73 9.055 4.17 7.897 4.031c-1.069-.127-2.197.103-3.492 1.225a1 1 0 11-1.31-1.512c1.705-1.476 3.39-1.896 5.04-1.698 1.53.183 2.975.898 4.235 1.521l.074.037c1.348.667 2.502 1.226 3.659 1.365z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2851_1909">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatReportUserIcon;
