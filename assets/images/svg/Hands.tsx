import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Hands = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m49.985 24.375-4.218-7.308a4.688 4.688 0 0 0-8.12 4.688l-6.562-11.368a4.688 4.688 0 0 0-8.116 4.685l-1.875-3.246a4.688 4.688 0 0 0-8.119 4.688l2.813 4.882-.274.234a4.688 4.688 0 0 0-6.912 6.066l8.906 15.429a18.75 18.75 0 1 0 32.477-18.75ZM36.488 38.587l.04-.023.032.056-.072-.033Z"
        opacity={0.2}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M45 7.5a12.216 12.216 0 0 1 7.5 5.625M17.49 54.375c-2.58-2.037-4.545-4.566-6.24-7.5M22.968 15.073a4.688 4.688 0 0 1 8.12-4.688l6.562 11.367M16.723 23.009l-3.75-6.495a4.689 4.689 0 0 1 8.12-4.687l7.97 13.802"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M36.562 38.618a9.375 9.375 0 0 1 3.432-12.806l-2.344-4.06a4.688 4.688 0 0 1 8.119-4.687l4.218 7.308a18.752 18.752 0 1 1-32.48 18.752L8.603 27.698a4.688 4.688 0 1 1 8.12-4.687l5.157 8.93"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h60v60H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Hands;
