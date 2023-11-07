import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function ReferralIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_3123_1682)">
        <Path
          d="M37.49 3.75L33.74 22.5l15 5.625L22.49 56.25l3.75-18.75-15-5.625L37.49 3.75z"
          fill="#fff"
          fillOpacity={0.2}
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3123_1682">
          <Path fill="#fff" transform="translate(-.01)" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ReferralIcon;
