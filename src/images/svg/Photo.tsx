import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Photo = (props: SvgProps) => (
  <Svg
 
    width={32}
    height={32}
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
      <Path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.086 27l13.707-13.707a.998.998 0 0 1 1.415 0L27 18.086" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Photo
