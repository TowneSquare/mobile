import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function UnmuteIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_3485_2191)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M3.928 3.121a.85.85 0 011.2.057l15 16.5a.85.85 0 01-1.257 1.144l-15-16.5a.85.85 0 01.057-1.201z" />
        <Path d="M7.5 7.4c.47 0 .85.38.85.85v7.5a.85.85 0 01-1.7 0v-7.5c0-.47.38-.85.85-.85zM17.438 9.381a.85.85 0 011.2.076 3.85 3.85 0 010 5.09.85.85 0 01-1.276-1.124 2.15 2.15 0 000-2.842.85.85 0 01.076-1.2z" />
        <Path d="M8.81 7.232a.85.85 0 01-.15 1.192l-.639.497A.85.85 0 017.5 9.1H3.1v5.8h4.4a.85.85 0 01.522.179l5.378 4.183v-4.787a.85.85 0 111.7 0V21a.85.85 0 01-1.372.67l-6.52-5.07H3A1.6 1.6 0 011.4 15V9A1.6 1.6 0 013 7.4h4.208l.41-.318a.85.85 0 011.192.15zM14.623 2.236A.85.85 0 0115.1 3v7.015a.85.85 0 11-1.7 0V4.738l-2.364 1.838a.85.85 0 11-1.044-1.342l3.736-2.905a.85.85 0 01.896-.093zM20.215 6.866a.85.85 0 011.2.067 7.6 7.6 0 010 10.134.85.85 0 01-1.267-1.134 5.9 5.9 0 000-7.866.85.85 0 01.067-1.2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3485_2191">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default UnmuteIcon;
