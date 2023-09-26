import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Twitter = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      d="M.063.832l10.039 13.422L0 25.167h2.273l8.845-9.554 7.145 9.554H26L15.397 10.99 24.799.832h-2.273l-8.145 8.8-6.58-8.8H.062zm3.344 1.675H6.96l15.695 20.985h-3.554L3.407 2.507z"
      fill="#404040"
    />
  </Svg>
);
export default Twitter;
