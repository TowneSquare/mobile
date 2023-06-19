import * as React from "react"
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const Checked = (props: SvgProps) => (
  <Svg

    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Circle
      cx={10}
      cy={10.5}
      r={9}
      fill="url(#a)"
      stroke="#32D583"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 10.83 1.633 2.355a.704.704 0 0 0 .56.315.69.69 0 0 0 .578-.28L14 6.5"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={10}
        x2={10}
        y1={1.5}
        y2={19.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#039855" />
        <Stop offset={1} stopColor="#027A48" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Checked
