import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ChatTabFocusedIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2964_6859)">
        <Path
          d="M3.75 4.5h16.5a1.5 1.5 0 011.5 1.5v15a1.485 1.485 0 01-.867 1.36 1.49 1.49 0 01-1.606-.224L16.266 19.5H3.75a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5zM9 14.25h6a.75.75 0 100-1.5H9a.75.75 0 100 1.5zm0-3h6a.75.75 0 100-1.5H9a.75.75 0 000 1.5z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2964_6859">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 24 0)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatTabFocusedIcon;
