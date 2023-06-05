import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Camera = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <G fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M8.393 3.195a1 1 0 0 1 .832-.445h6a1 1 0 0 1 .832.445L17.26 5h2.465a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V7.5a2.5 2.5 0 0 1 2.5-2.5h2.464l1.204-1.805ZM9.76 4.75 8.557 6.555A1 1 0 0 1 7.725 7h-3a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5h-3a1 1 0 0 1-.832-.445L14.689 4.75H9.76Z" />
      <Path d="M12.225 10a2.375 2.375 0 1 0 0 4.75 2.375 2.375 0 0 0 0-4.75ZM7.85 12.375a4.375 4.375 0 1 1 8.75 0 4.375 4.375 0 0 1-8.75 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.475 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Camera;
