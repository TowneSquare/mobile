import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const WalletImage = (props: SvgProps) => (
  <Svg
   
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M7.813 12.5v25a3.125 3.125 0 0 0 3.125 3.125h31.25a1.563 1.563 0 0 0 1.562-1.563V17.189a1.563 1.563 0 0 0-1.563-1.563h-31.25A3.125 3.125 0 0 1 7.813 12.5Zm0 0a3.125 3.125 0 0 1 3.125-3.125H37.5v4.862"
      />
      <Path
        fill="#222"
        d="M37.072 9.447H10.8l-3.49 2.121V37.84l2.395 2.395h33.73V15.468h-6.363v-6.02Z"
        opacity={0.2}
      />
      <Path
        fill="#222"
        d="M35.156 29.688a2.344 2.344 0 1 0 0-4.688 2.344 2.344 0 0 0 0 4.688Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default WalletImage
