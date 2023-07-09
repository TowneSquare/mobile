import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const PostNotFound = (props: SvgProps) => (
  <Svg width={61} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="M51.125 11.25H9.875C8.839 11.25 8 12.09 8 13.125v33.75c0 1.035.84 1.875 1.875 1.875h41.25c1.035 0 1.875-.84 1.875-1.875v-33.75c0-1.036-.84-1.875-1.875-1.875Z"
        opacity={0.2}
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M51.125 11.25H9.875C8.839 11.25 8 12.09 8 13.125v33.75c0 1.035.84 1.875 1.875 1.875h41.25c1.035 0 1.875-.84 1.875-1.875v-33.75c0-1.036-.84-1.875-1.875-1.875ZM19.25 22.5h22.5M19.25 30h22.5M19.25 37.5h22.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h60v60H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PostNotFound;
