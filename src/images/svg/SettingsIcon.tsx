import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SettingsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
      <Path d="M12.192 19.323h-.375L8.812 21a9.807 9.807 0 0 1-3.197-1.8l-.012-3.375a4.977 4.977 0 0 1-.187-.32l-2.988-1.701a9.296 9.296 0 0 1 0-3.606l2.985-1.697c.06-.108.124-.214.187-.32l.015-3.374A9.804 9.804 0 0 1 8.812 3l3 1.677h.375l3-1.677a9.808 9.808 0 0 1 3.198 1.8l.011 3.375c.067.105.13.21.188.32l2.986 1.7a9.293 9.293 0 0 1 0 3.606l-2.985 1.697c-.061.108-.124.215-.188.32l-.015 3.374A9.804 9.804 0 0 1 15.187 21l-2.995-1.677Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SettingsIcon;
