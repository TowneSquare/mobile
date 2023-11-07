import * as React from 'react';
import { Dimensions } from 'react-native';
import { sizes } from '../../../src/utils';

import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const BlockIcon = (props: SvgProps) => (
  <Svg
    width={size.getHeightSize(60)}
    height={size.getHeightSize(60)}
    viewBox="0 0 60 60"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2774_3252)" fill="#fff">
      <Path
        opacity={0.2}
        d="M30 52.5c12.426 0 22.5-10.074 22.5-22.5S42.426 7.5 30 7.5 7.5 17.574 7.5 30 17.574 52.5 30 52.5z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.03 13.03a1.5 1.5 0 012.121 0L46.97 44.849a1.5 1.5 0 11-2.121 2.121l-31.82-31.819a1.5 1.5 0 010-2.121z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 9C18.402 9 9 18.402 9 30s9.402 21 21 21 21-9.402 21-21S41.598 9 30 9zM6 30C6 16.745 16.745 6 30 6s24 10.745 24 24-10.745 24-24 24S6 43.255 6 30z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2774_3252">
        <Path fill="#fff" d="M0 0H60V60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BlockIcon;
