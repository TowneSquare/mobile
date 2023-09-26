import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CreatePostCommunityIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2672_7152)"
        stroke="#B882FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M18 11.25a5.615 5.615 0 014.5 2.25M1.5 13.5A5.615 5.615 0 016 11.25M12 17.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM6.75 20.25a6.094 6.094 0 0110.5 0M15.094 7.5A3 3 0 1118 11.25M6 11.25A3 3 0 118.907 7.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_2672_7152">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CreatePostCommunityIcon
