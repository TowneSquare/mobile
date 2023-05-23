import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Cat = (props: SvgProps) => (
  <Svg
  
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        d="M16 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path d="M10.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <Path
        fillRule="evenodd"
        d="M16 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1ZM13.293 21.293a1 1 0 0 1 1.414 0L16 22.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414ZM12 5.626a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V6.626a1 1 0 0 1 1-1ZM20 5.626a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V6.626a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M4.234 4.152a2 2 0 0 1 2.228.485l2.162 2.489a13.859 13.859 0 0 1 14.752 0l2.162-2.487A2 2 0 0 1 29 5.999V17c0 6.708-5.907 12-13 12S3 23.708 3 17V6a2 2 0 0 1 1.234-1.848ZM5 6.003V17c0 5.442 4.843 10 11 10s11-4.558 11-10V6.005l-2.695 3.101a1 1 0 0 1-1.342.154 11.86 11.86 0 0 0-13.926 0 1 1 0 0 1-1.342-.154L5 6.003Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Cat
