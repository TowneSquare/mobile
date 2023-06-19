import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BookMark = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AAA"
        fillRule="evenodd"
        d="M7.352 5.15a.002.002 0 0 0-.002.002v13.175l4.223-2.64a.65.65 0 0 1 .689 0l4.223 2.64V5.152l-.001-.001-.002-.001h-9.13Zm-.92-.919c.243-.244.575-.381.92-.381h9.13a1.302 1.302 0 0 1 1.303 1.302V19.5a.65.65 0 0 1-.995.551l-4.873-3.045-4.873 3.045a.65.65 0 0 1-.994-.551V5.152c0-.345.137-.676.381-.92Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookMark;
