import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SealChecks = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G
      stroke="#B882FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M9.251 27.111c-1.39-.844-1.223-3.372-2.127-4.608-.936-1.275-3.382-1.9-3.753-3.418-.37-1.518 1.512-3.2 1.755-4.764.233-1.512-1.081-3.68-.237-5.07.844-1.39 3.373-1.223 4.608-2.126 1.281-.939 1.9-3.383 3.418-3.754 1.518-.37 3.2 1.512 4.764 1.755 1.513.233 3.68-1.081 5.07-.237 1.39.844 1.222 3.373 2.126 4.608.939 1.282 3.383 1.9 3.754 3.419.37 1.518-1.512 3.2-1.755 4.763-.233 1.514 1.081 3.68.237 5.07-.844 1.39-3.372 1.223-4.608 2.127-1.276.937-1.9 3.382-3.419 3.753-1.517.37-3.2-1.511-4.763-1.755-1.512-.233-3.68 1.082-5.07.237Z" />
      <Path d="m11.38 18.158 3.626 2.202 5.14-8.46" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SealChecks;
