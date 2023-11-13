import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Mail = (props: SvgProps) => (
  <Svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
  >
    <G clip-path="url(#clip0_2892_2099)">
      <Path
        d="M52.5 13.125L30 33.75L7.5 13.125"
        fill="#D9D9D9"
        fill-opacity="0.2"
      />
      <Path
        d="M52.5 13.125L30 33.75L7.5 13.125"
        stroke="white"
        stroke-width="4.6875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.5 13.125H52.5V45C52.5 45.4973 52.3025 45.9742 51.9508 46.3258C51.5992 46.6775 51.1223 46.875 50.625 46.875H9.375C8.87772 46.875 8.40081 46.6775 8.04918 46.3258C7.69754 45.9742 7.5 45.4973 7.5 45V13.125Z"
        stroke="white"
        stroke-width="4.6875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.9104 30L8.0791 46.3453"
        stroke="white"
        stroke-width="4.6875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M51.9209 46.3453L34.0896 30"
        stroke="white"
        stroke-width="4.6875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2892_2099">
        <Rect width="60" height="60" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Mail;
