import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeBlur = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.822 2.862a1.75 1.75 0 012.356 0l.013.013 7.494 6.67a1.75 1.75 0 01.565 1.287v7.918a1.75 1.75 0 01-1.75 1.75h-15a1.75 1.75 0 01-1.75-1.75v-7.917a1.752 1.752 0 01.563-1.288l7.495-6.67.014-.013zM12 4.5l-7.25 6.44v7.56h14.5v-7.56L12 4.5z"
      fill="#666"
    />
  </Svg>
);
export default HomeBlur;
