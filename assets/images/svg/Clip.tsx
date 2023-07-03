import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Clip = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="#121212"
      d="M20.155 11.47a.747.747 0 0 1 0 1.06l-7.692 7.688a5.25 5.25 0 0 1-7.425-7.426l9.306-9.442a3.75 3.75 0 1 1 5.307 5.301l-9.307 9.443a2.254 2.254 0 0 1-3.188-3.188l7.81-7.933a.75.75 0 1 1 1.068 1.052l-7.81 7.942a.749.749 0 1 0 1.057 1.065l9.306-9.438a2.251 2.251 0 1 0-3.18-3.188l-9.305 9.439a3.75 3.75 0 1 0 5.3 5.308l7.693-7.687a.75.75 0 0 1 1.06.003Z"
    />
  </Svg>
);
export default Clip;
