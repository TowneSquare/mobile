import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Retweet = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M13.837 4.18c.24-.24.63-.24.87 0l2.84 2.84c.24.24.24.63 0 .87l-2.84 2.84a.615.615 0 0 1-.87-.87l2.405-2.404-2.405-2.405a.615.615 0 0 1 0-.87Z"
      clipRule="evenodd"
    />
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M5.751 8.071a.52.52 0 0 0-.52.52v3.093a.615.615 0 1 1-1.231 0V8.592A1.751 1.751 0 0 1 5.751 6.84h11.361a.615.615 0 1 1 0 1.231H5.752ZM10.163 13.27c.24.24.24.63 0 .87l-2.405 2.404 2.405 2.405a.615.615 0 0 1-.87.87l-2.84-2.84a.615.615 0 0 1 0-.87l2.84-2.84c.24-.24.63-.24.87 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M19.385 11.7c.34 0 .615.276.615.616v3.092a1.751 1.751 0 0 1-1.751 1.752H6.888a.615.615 0 1 1 0-1.231h11.36a.52.52 0 0 0 .521-.52v-3.093c0-.34.276-.616.616-.616Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Retweet;
