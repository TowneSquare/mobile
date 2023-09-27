import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Retweeted = (props: SvgProps) => (
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
      d="M13.837 4.18c.24-.24.63-.24.87 0l2.84 2.84c.24.24.24.63 0 .87l-2.84 2.84a.615.615 0 01-.87-.87l2.405-2.404-2.405-2.405a.615.615 0 010-.87z"
      fill="#9264F8"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.751 8.07a.52.52 0 00-.52.522v3.092a.615.615 0 11-1.231 0V8.592A1.751 1.751 0 015.751 6.84h11.361a.615.615 0 110 1.23H5.752zM10.163 13.27c.24.24.24.63 0 .87l-2.405 2.404 2.405 2.405a.615.615 0 01-.87.87l-2.84-2.84a.615.615 0 010-.87l2.84-2.84c.24-.24.63-.24.87 0z"
      fill="#9264F8"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.385 11.7c.34 0 .615.276.615.616v3.092a1.751 1.751 0 01-1.752 1.752H6.889a.615.615 0 110-1.231h11.36a.52.52 0 00.521-.52v-3.093c0-.34.276-.616.616-.616z"
      fill="#9264F8"
    />
  </Svg>
);
export default Retweeted;
