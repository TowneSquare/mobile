import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function FailedInfoIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2885_10349)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 17.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.2-10.397C13.2 6.494 12.663 6 12 6c-.663 0-1.2.494-1.2 1.103v5.794c0 .609.537 1.103 1.2 1.103.663 0 1.2-.494 1.2-1.103V7.103z"
          fill="#FF4471"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2885_10349">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FailedInfoIcon;
