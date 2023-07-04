import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Thrash = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path
        d="M46.875 13.125V48.75A1.875 1.875 0 0 1 45 50.625H15a1.875 1.875 0 0 1-1.875-1.875V13.125h33.75Z"
        opacity={0.2}
      />
      <Path
        fillRule="evenodd"
        d="M7.875 13.125a1.5 1.5 0 0 1 1.5-1.5h41.25a1.5 1.5 0 0 1 0 3H9.375a1.5 1.5 0 0 1-1.5-1.5ZM24.375 22.875a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0v-15a1.5 1.5 0 0 1 1.5-1.5ZM35.625 22.875a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0v-15a1.5 1.5 0 0 1 1.5-1.5Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M13.125 11.625a1.5 1.5 0 0 1 1.5 1.5V48.75a.375.375 0 0 0 .375.375h30a.375.375 0 0 0 .375-.375V13.125a1.5 1.5 0 0 1 3 0V48.75A3.375 3.375 0 0 1 45 52.125H15a3.375 3.375 0 0 1-3.375-3.375V13.125a1.5 1.5 0 0 1 1.5-1.5Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M20.663 5.663a5.25 5.25 0 0 1 3.712-1.538h11.25a5.25 5.25 0 0 1 5.25 5.25v3.75a1.5 1.5 0 0 1-3 0v-3.75a2.25 2.25 0 0 0-2.25-2.25h-11.25a2.25 2.25 0 0 0-2.25 2.25v3.75a1.5 1.5 0 0 1-3 0v-3.75a5.25 5.25 0 0 1 1.538-3.712Z"
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
export default Thrash;
