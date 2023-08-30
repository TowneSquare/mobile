import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function CommunityUsersIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 76 77"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_2794)">
        <Path
          d="M57 36.125a17.786 17.786 0 0114.25 7.125M4.75 43.25A17.785 17.785 0 0119 36.125"
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M38 55.125c6.558 0 11.875-5.317 11.875-11.875S44.558 31.375 38 31.375 26.125 36.692 26.125 43.25 31.442 55.125 38 55.125z"
          fill="#fff"
          fillOpacity={0.2}
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.375 64.625a19.297 19.297 0 0133.25 0"
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M47.797 24.25A9.5 9.5 0 1157 36.125"
          fill="#fff"
          fillOpacity={0.2}
        />
        <Path
          d="M47.797 24.25A9.5 9.5 0 1157 36.125"
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 36.125a9.5 9.5 0 119.203-11.875"
          fill="#fff"
          fillOpacity={0.2}
        />
        <Path
          d="M19 36.125a9.5 9.5 0 119.203-11.875"
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_2794">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H76V76H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CommunityUsersIcon;
