import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const CopyIcon = (props: SvgProps) => (
  <Svg
    
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M16.25 15.75h4.5v-12h-12v4.5" />
      <Path d="M16.25 8.25h-12v12h12v-12Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CopyIcon
