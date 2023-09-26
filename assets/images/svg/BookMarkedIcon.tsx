import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BookMarkedIcon = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2749_3724)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.431 4.231c.245-.244.576-.381.921-.381h9.13a1.302 1.302 0 011.303 1.302V19.5a.65.65 0 01-.995.551l-4.873-3.045-4.873 3.045a.65.65 0 01-.994-.551V5.152c0-.345.137-.676.381-.92z"
        fill="#9264F8"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2749_3724">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookMarkedIcon;
