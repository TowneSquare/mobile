import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CommunityActiveTabIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2732_9981)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M21.02 12.706a4.805 4.805 0 00-2.152-.507 1 1 0 01-.002-2 6.804 6.804 0 015.452 2.726 1 1 0 11-1.601 1.199 4.803 4.803 0 00-1.697-1.418zM6.467 12.2a4.804 4.804 0 00-3.85 1.924 1 1 0 11-1.6-1.2A6.805 6.805 0 016.468 10.2a1 1 0 01-.001 2zM12.667 10.65a2.875 2.875 0 100 5.75 2.875 2.875 0 000-5.75zm-4.875 2.875a4.875 4.875 0 119.75 0 4.875 4.875 0 01-9.75 0z" />
        <Path d="M12.667 18.4a5.296 5.296 0 00-4.563 2.608 1 1 0 01-1.723-1.015 7.297 7.297 0 0112.573 0 1 1 0 11-1.723 1.015 5.296 5.296 0 00-4.564-2.608zM19.593 6.13a2.1 2.1 0 00-2.761 1.445 1 1 0 01-1.937-.5 4.1 4.1 0 113.972 5.125 1 1 0 010-2 2.1 2.1 0 00.726-4.07zM6.892 6.043a2.1 2.1 0 10-.425 4.157 1 1 0 010 2 4.1 4.1 0 113.971-5.125 1 1 0 01-1.937.5 2.1 2.1 0 00-1.609-1.532z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2732_9981">
          <Path fill="#fff" transform="translate(.667)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CommunityActiveTabIcon;
