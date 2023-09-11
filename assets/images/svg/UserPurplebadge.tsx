import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  SvgProps,
} from 'react-native-svg';

function UserPurplebadge(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_5270)">
        <Path
          d="M9 18A9 9 0 109 0a9 9 0 000 18z"
          fill="url(#paint0_radial_2427_5270)"
        />
        <Path
          d="M4.5 9.917l1.838 2.608a.786.786 0 001.28.038L13.5 5.121"
          stroke="#fff"
          strokeWidth={1.125}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2427_5270"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-142.412 9.592 4.552) scale(16.0938)"
        >
          <Stop offset={0.142317} stopColor="#9877FF" />
          <Stop offset={0.53125} stopColor="#A858FF" />
        </RadialGradient>
        <ClipPath id="clip0_2427_5270">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UserPurplebadge;
