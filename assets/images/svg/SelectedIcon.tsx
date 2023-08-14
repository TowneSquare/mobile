import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SelectedIcon = (props: SvgProps) => (
  <Svg

    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M20 3.75A16.25 16.25 0 1 0 36.25 20 16.268 16.268 0 0 0 20 3.75Zm7.135 13.384-8.75 8.75a1.25 1.25 0 0 1-1.769 0l-3.75-3.75a1.251 1.251 0 0 1 1.769-1.768l2.865 2.867 7.866-7.867a1.252 1.252 0 0 1 2.135.884 1.252 1.252 0 0 1-.366.884Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SelectedIcon
