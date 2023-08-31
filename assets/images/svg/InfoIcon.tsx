import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function InfoIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_3301)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm8.25-.8c0-.663.512-1.2 1.143-1.2.53 0 1.039.221 1.414.615s.586.928.586 1.485v4.238c.493.133.857.603.857 1.162 0 .663-.512 1.2-1.143 1.2-.53 0-1.039-.221-1.414-.615a2.155 2.155 0 01-.586-1.485v-4.238c-.493-.133-.857-.603-.857-1.162zm3.05-4.1a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_3301">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default InfoIcon;
