import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const PostGif = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M12.75 5.75a1 1 0 0 1 1 1v10.5a1 1 0 1 1-2 0V6.75a1 1 0 0 1 1-1ZM15.5 6.75a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-3.5v9.5a1 1 0 1 1-2 0V6.75Z" />
      <Path d="M15.5 12a1 1 0 0 1 1-1h3.75a1 1 0 1 1 0 2H16.5a1 1 0 0 1-1-1ZM6 7.75a2 2 0 0 0-2 2v4.5a2 2 0 0 0 4 0V13H6.75a1 1 0 1 1 0-2H9a1 1 0 0 1 1 1v2.25a4 4 0 1 1-8 0v-4.5a4 4 0 0 1 4-4c1.828 0 3.516 1.24 3.968 3a1 1 0 1 1-1.936.5C7.819 8.421 6.968 7.75 6 7.75Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PostGif
