import * as React from 'react';
import { sizes } from '../../../src/utils';
import { Dimensions } from 'react-native';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ShareIcon = (props: SvgProps) => (
  <Svg
    width={size.getHeightSize(24)}
    height={size.getHeightSize(24)}
    fill="none"
    {...props}
  >
    <G
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M6.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 21.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 8.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.477 6.872l-5.454 3.506M9.023 13.622l5.454 3.506" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShareIcon;
