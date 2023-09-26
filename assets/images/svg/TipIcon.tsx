import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const TipIcon = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G
      clipPath="url(#clip0_2749_17616)"
      stroke="#AAA"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9 11.25c4.142 0 7.5-1.511 7.5-3.375S13.142 4.5 9 4.5c-4.142 0-7.5 1.511-7.5 3.375S4.858 11.25 9 11.25z" />
      <Path d="M1.5 7.875v3.75C1.5 13.489 4.858 15 9 15c4.142 0 7.5-1.511 7.5-3.375v-3.75M6 10.969v3.75" />
      <Path d="M16.5 9.068c3.424.313 6 1.674 6 3.307 0 1.864-3.358 3.375-7.5 3.375-1.838 0-3.521-.297-4.825-.791" />
      <Path d="M7.5 14.932v1.193c0 1.864 3.358 3.375 7.5 3.375 4.142 0 7.5-1.511 7.5-3.375v-3.75M18 15.469v3.75M12 10.969v8.25" />
    </G>
    <Defs>
      <ClipPath id="clip0_2749_17616">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TipIcon;
