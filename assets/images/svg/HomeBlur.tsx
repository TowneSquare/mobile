import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeBlur = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M10.822 2.455a1.75 1.75 0 0 1 2.356 0l.013.013 7.494 7.077a1.751 1.751 0 0 1 .565 1.287V19.5a1.75 1.75 0 0 1-1.75 1.75h-15a1.75 1.75 0 0 1-1.75-1.75v-8.668a1.752 1.752 0 0 1 .563-1.287l7.495-7.077.014-.013ZM12 4.094l-7.25 6.845v8.311h14.5v-8.31L12 4.094Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeBlur;
