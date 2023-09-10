import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

function CommunityPostIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 61 60"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_9660)">
        <Path
          d="M25.421 45.91a1.874 1.874 0 00-1.608-.91H9.875A1.875 1.875 0 018 43.125v-30a1.875 1.875 0 011.875-1.875h41.25A1.875 1.875 0 0153 13.125v30A1.875 1.875 0 0151.125 45H37.187a1.874 1.874 0 00-1.608.91l-3.471 5.68a1.874 1.874 0 01-3.216 0l-3.47-5.68z"
          fill="#404040"
        />
        <Path
          d="M25.421 45.91a1.874 1.874 0 00-1.608-.91H9.875A1.875 1.875 0 018 43.125v-30a1.875 1.875 0 011.875-1.875h41.25A1.875 1.875 0 0153 13.125v30A1.875 1.875 0 0151.125 45H37.187a1.874 1.874 0 00-1.608.91l-3.471 5.68a1.874 1.874 0 01-3.216 0l-3.47-5.68zM23 24.375h15M23 31.875h15"
          stroke="#fff"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_9660">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CommunityPostIcon;
