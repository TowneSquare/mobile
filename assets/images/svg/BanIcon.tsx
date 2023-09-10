import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function BanIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_5703)" fill="#fff">
        <Path
          opacity={0.2}
          d="M30 52.5c12.426 0 22.5-10.074 22.5-22.5S42.426 7.5 30 7.5 7.5 17.574 7.5 30 17.574 52.5 30 52.5z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.03 13.03a1.5 1.5 0 012.122 0L46.97 44.85a1.5 1.5 0 11-2.121 2.121L13.03 15.151a1.5 1.5 0 010-2.12z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 9C18.402 9 9 18.402 9 30s9.402 21 21 21 21-9.402 21-21S41.598 9 30 9zM6 30C6 16.745 16.745 6 30 6s24 10.745 24 24-10.745 24-24 24S6 43.255 6 30z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_5703">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BanIcon;
