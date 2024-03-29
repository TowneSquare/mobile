import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Google = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 26"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.938 7.438a6.652 6.652 0 00-4.696-1.835c-3.194 0-5.906 2.155-6.873 5.056a7.333 7.333 0 000 4.687h.004c.972 2.897 3.68 5.052 6.873 5.052 1.649 0 3.064-.422 4.161-1.167v-.003a5.666 5.666 0 002.447-3.72h-6.612v-4.714h11.547c.143.819.211 1.655.211 2.488 0 3.723-1.33 6.87-3.646 9.003l.003.002c-2.03 1.871-4.814 2.955-8.115 2.955A12.244 12.244 0 011.302 18.5a12.252 12.252 0 010-10.993A12.24 12.24 0 0112.242.759a11.766 11.766 0 018.19 3.184l-3.494 3.495z"
      fill="#404040"
    />
  </Svg>
);
export default Google;
