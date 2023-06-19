import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Mail = (props: SvgProps) => (
  <Svg

    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G
      stroke="#2F2F2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      clipPath="url(#a)"
    >
      <Path d="M28 7 16 18 4 7" />
      <Path d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7ZM13.819 16l-9.51 8.718M27.691 24.718 18.181 16" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Mail
