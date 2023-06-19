import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Info = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm8.25-.8c0-.663.512-1.2 1.143-1.2.53 0 1.039.221 1.414.615s.586.928.586 1.485v4.238c.493.133.857.603.857 1.162 0 .663-.512 1.2-1.143 1.2-.53 0-1.039-.221-1.414-.615a2.155 2.155 0 0 1-.586-1.485v-4.238c-.493-.133-.857-.603-.857-1.162Zm3.05-4.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Info;
