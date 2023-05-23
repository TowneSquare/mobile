import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Robot = (props: SvgProps) => (
  <Svg
  
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#B882FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Z"
      />
      <Path
        stroke="#B882FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 18h-9a2.5 2.5 0 0 0 0 5h9a2.5 2.5 0 0 0 0-5ZM18 18v5M14 18v5M16 7V2"
      />
      <Path
        fill="#B882FF"
        d="M10.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Robot
