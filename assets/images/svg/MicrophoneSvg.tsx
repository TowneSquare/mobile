import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MicrophoneSvg = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M8 1.923a2.538 2.538 0 0 0-2.54 2.539V10a2.538 2.538 0 0 0 5.078 0V4.462a2.538 2.538 0 0 0-2.539-2.539ZM3.614 4.462a4.385 4.385 0 1 1 8.769 0V10a4.385 4.385 0 0 1-8.77 0V4.462ZM8 15.308c.51 0 .923.413.923.923V19a.923.923 0 1 1-1.846 0v-2.77c0-.51.413-.922.923-.922Z"
      clipRule="evenodd"
    />
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M1.769 9.077c.51 0 .923.413.923.923a5.308 5.308 0 1 0 10.615 0 .923.923 0 0 1 1.846 0A7.154 7.154 0 1 1 .846 10c0-.51.413-.923.923-.923Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MicrophoneSvg;
