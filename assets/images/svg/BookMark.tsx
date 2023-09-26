import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BookMark = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2749_5856)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.352 5.15h-.001V18.328l4.222-2.64a.65.65 0 01.689 0l4.223 2.64V5.152v-.001l-.002-.001h-9.13zm-.92-.919c.244-.244.575-.381.92-.381h9.13a1.302 1.302 0 011.303 1.302V19.5a.65.65 0 01-.995.551l-4.873-3.045-4.872 3.045a.65.65 0 01-.995-.551V5.152c0-.345.137-.676.381-.92z"
        fill="#AAA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2749_5856">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookMark;
