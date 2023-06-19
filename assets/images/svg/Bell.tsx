import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bell = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path fill="#B882FF" d="M16 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 17c.222.866.683 1.626 1.314 2.167.63.54 1.398.833 2.186.833s1.555-.292 2.186-.833c.631-.54 1.092-1.301 1.314-2.167M9.271 3.5V1.625M15.54 10.967c.158 4.797 1.231 5.658 1.231 5.658h-15s1.25-1.597 1.25-6.875a6.256 6.256 0 0 1 8.103-5.97"
    />
  </Svg>
);
export default Bell;
