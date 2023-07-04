import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ShareFeed = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M7.172 10.06a1.94 1.94 0 1 0 0 3.881 1.94 1.94 0 0 0 0-3.882ZM4 12a3.172 3.172 0 1 1 6.343 0A3.172 3.172 0 0 1 4 12ZM16.828 14.887a1.94 1.94 0 1 0 0 3.882 1.94 1.94 0 0 0 0-3.881Zm-3.171 1.941a3.172 3.172 0 1 1 6.343 0 3.172 3.172 0 0 1-6.343 0ZM16.828 5.23a1.94 1.94 0 1 0 0 3.882 1.94 1.94 0 0 0 0-3.881Zm-3.171 1.942a3.172 3.172 0 1 1 6.343 0 3.172 3.172 0 0 1-6.343 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M15.095 8.031a.615.615 0 0 1-.274.827l-5.09 2.556a.615.615 0 0 1-.552-1.1l5.09-2.556a.615.615 0 0 1 .826.273ZM8.905 12.86a.615.615 0 0 1 .827-.274l5.09 2.556a.615.615 0 0 1-.553 1.1l-5.09-2.556a.615.615 0 0 1-.274-.826Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ShareFeed;
