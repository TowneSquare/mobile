import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const BlockIcon = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path
        d="M30 52.5c12.426 0 22.5-10.074 22.5-22.5S42.426 7.5 30 7.5 7.5 17.574 7.5 30 17.574 52.5 30 52.5Z"
        opacity={0.2}
      />
      <Path
        fillRule="evenodd"
        d="M13.03 13.03a1.5 1.5 0 0 1 2.122 0L46.97 44.849a1.5 1.5 0 0 1-2.121 2.121L13.03 15.151a1.5 1.5 0 0 1 0-2.121Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M30 9C18.402 9 9 18.402 9 30s9.402 21 21 21 21-9.402 21-21S41.598 9 30 9ZM6 30C6 16.745 16.745 6 30 6s24 10.745 24 24-10.745 24-24 24S6 43.255 6 30Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BlockIcon;
