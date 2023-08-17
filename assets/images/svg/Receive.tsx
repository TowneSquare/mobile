import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Receive = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2AB576"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM14.99 9.736l-5.98 4.528"
    />
    <Path
      stroke="#2AB576"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.213 14.844-4.203-.58.58-4.203"
    />
  </Svg>
)
export default Receive
