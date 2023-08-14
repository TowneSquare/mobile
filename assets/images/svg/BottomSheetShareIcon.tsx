import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const BottomSheetShareIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM16.5 16.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM16.5 3.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
      <Path d="M14.818 6.331a1 1 0 0 1-.3 1.382L9.064 11.22a1 1 0 1 1-1.082-1.682l5.455-3.506a1 1 0 0 1 1.381.3ZM7.682 13.081a1 1 0 0 1 1.382-.3l5.454 3.506a1 1 0 0 1-1.082 1.682l-5.454-3.506a1 1 0 0 1-.3-1.382Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BottomSheetShareIcon;
