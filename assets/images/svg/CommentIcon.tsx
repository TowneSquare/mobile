import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CommentIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M11.998 4a7.996 7.996 0 0 1 7.805 6.234 8.003 8.003 0 0 1-4.36 8.988 7.997 7.997 0 0 1-6.767.053l-3.951.715a.616.616 0 0 1-.686-.822l1.13-3.007A8.002 8.002 0 0 1 11.998 4m0 1.23v-.613.614a6.765 6.765 0 0 0-6.757 7.091 6.77 6.77 0 0 0 1.125 3.427c.11.165.133.372.063.557l-.856 2.28 3.078-.557a.616.616 0 0 1 .38.053 6.764 6.764 0 0 0 9.565-4.559 6.772 6.772 0 0 0-3.656-7.621 6.766 6.766 0 0 0-2.942-.671Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CommentIcon;
