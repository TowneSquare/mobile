import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Discord = (props: SvgProps) => (
  <Svg
 
  width={props.size}
  height={props.size}
  viewBox="0 0 28 28"
  fill="none"
  {...props}
>
  <Path
    d="M23.703 4.847a23.09 23.09 0 00-5.7-1.767.086.086 0 00-.09.043 16.062 16.062 0 00-.71 1.458 21.317 21.317 0 00-6.402 0 14.769 14.769 0 00-.72-1.458.09.09 0 00-.092-.043c-2 .344-3.914.947-5.7 1.767a.082.082 0 00-.037.032C.622 10.303-.372 15.592.116 20.817c.002.025.016.05.036.065a23.218 23.218 0 006.992 3.534.09.09 0 00.098-.032 16.593 16.593 0 001.43-2.326.089.089 0 00-.048-.124 15.29 15.29 0 01-2.184-1.04.09.09 0 01-.01-.15c.148-.11.294-.224.435-.34a.087.087 0 01.09-.012c4.582 2.092 9.543 2.092 14.072 0a.086.086 0 01.091.011c.14.116.287.231.435.341a.09.09 0 01-.008.15c-.697.407-1.422.751-2.185 1.04a.09.09 0 00-.047.124c.42.814.9 1.59 1.429 2.325a.089.089 0 00.098.033 23.14 23.14 0 007.003-3.534.09.09 0 00.036-.064c.584-6.04-.977-11.286-4.14-15.937a.071.071 0 00-.036-.034zM9.357 17.636c-1.38 0-2.517-1.267-2.517-2.822 0-1.556 1.115-2.823 2.517-2.823 1.412 0 2.538 1.278 2.516 2.822 0 1.556-1.115 2.823-2.516 2.823zm9.303 0c-1.379 0-2.516-1.267-2.516-2.822 0-1.556 1.115-2.823 2.517-2.823 1.412 0 2.538 1.278 2.516 2.822 0 1.556-1.104 2.823-2.517 2.823z"
    fill="#404040"
  />
</Svg>
);
export default Discord;
