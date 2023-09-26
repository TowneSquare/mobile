import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function RewardIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2766_18263)">
        <Path
          d="M15 1.5L13.5 9l6 2.25L9 22.5l1.5-7.5-6-2.25L15 1.5z"
          stroke="#666"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2766_18263">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RewardIcon;
