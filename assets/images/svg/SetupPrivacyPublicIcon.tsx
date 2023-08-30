import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps, Circle } from 'react-native-svg';

function SetupPrivacyPublicIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 84 85"
      fill="none"
      {...props}
    >
      <Circle
        cx={41.5}
        cy={43}
        r={37.5}
        stroke="#B882FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G clipPath="url(#clip0_2465_7407)">
        <Path
          d="M42 63c10.77 0 19.5-8.73 19.5-19.5S52.77 24 42 24s-19.5 8.73-19.5 19.5S31.23 63 42 63z"
          fill="#fff"
          fillOpacity={0.1}
        />
        <Path
          d="M42 63c10.77 0 19.5-8.73 19.5-19.5S52.77 24 42 24s-19.5 8.73-19.5 19.5S31.23 63 42 63z"
          stroke="#B882FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M33.875 43.5c0 7.61 2.708 14.406 6.963 18.99a1.579 1.579 0 002.324 0c4.255-4.584 6.963-11.38 6.963-18.99 0-7.609-2.708-14.405-6.963-18.99a1.579 1.579 0 00-2.324 0c-4.255 4.585-6.963 11.381-6.963 18.99zM23.61 37H60.39M23.61 50H60.39"
          stroke="#B882FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2465_7407">
          <Path fill="#fff" transform="translate(16 17.5)" d="M0 0H52V52H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SetupPrivacyPublicIcon;
