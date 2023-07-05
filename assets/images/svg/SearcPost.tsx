import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SearchPost = (props: SvgProps) => (
  <Svg width={61} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        d="M26.75 45c10.355 0 18.75-8.395 18.75-18.75S37.105 7.5 26.75 7.5 8 15.895 8 26.25 16.395 45 26.75 45Z"
        opacity={0.2}
      />
      <Path
        stroke="#AAA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M26.75 45c10.355 0 18.75-8.395 18.75-18.75S37.105 7.5 26.75 7.5 8 15.895 8 26.25 16.395 45 26.75 45ZM40.009 39.509 53 52.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h60v60H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SearchPost;
