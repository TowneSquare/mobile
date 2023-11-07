import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SharePostIcon(props: SvgProps) {
  return (
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
        d="M7.172 10.06a1.94 1.94 0 100 3.881 1.94 1.94 0 000-3.882zM4 12a3.172 3.172 0 116.343 0A3.172 3.172 0 014 12zM16.829 14.887a1.94 1.94 0 100 3.882 1.94 1.94 0 000-3.881zm-3.172 1.941a3.172 3.172 0 116.343 0 3.172 3.172 0 01-6.343 0zM16.829 5.23a1.94 1.94 0 100 3.882 1.94 1.94 0 000-3.881zm-3.172 1.942a3.172 3.172 0 116.343 0 3.172 3.172 0 01-6.343 0z"
        fill="#AAA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.095 8.031a.615.615 0 01-.274.827l-5.09 2.556a.615.615 0 01-.552-1.1l5.09-2.556a.615.615 0 01.826.273zM8.905 12.86a.615.615 0 01.826-.274l5.09 2.556a.615.615 0 11-.552 1.1l-5.09-2.556a.615.615 0 01-.274-.826z"
        fill="#AAA"
      />
    </Svg>
  );
}

export default SharePostIcon;
