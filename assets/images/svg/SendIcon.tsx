import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SendIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M12 4.5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-10 8c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z" />
      <Path d="M7.25 12.5a1 1 0 0 1 1-1h7.5a1 1 0 1 1 0 2h-7.5a1 1 0 0 1-1-1Z" />
      <Path d="M12.043 8.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SendIcon
