import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Photo = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M5.225 4.75v14.5h14.5V4.75h-14.5Zm-2-.25c0-.966.783-1.75 1.75-1.75h15c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 0 1-1.75 1.75h-15a1.75 1.75 0 0 1-1.75-1.75v-15Z" />
      <Path d="M9.475 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16.6 10.854l3.417 3.418a1 1 0 1 0 1.415-1.414l-3.595-3.595a1.75 1.75 0 0 0-2.476 0l-10.28 10.28a1 1 0 0 0 1.415 1.415L16.6 10.854Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.475 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Photo
