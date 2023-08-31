import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function TetherIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_5176)">
        <Path
          d="M20 40c11.083 0 20-8.917 20-20S31.083 0 20 0 0 8.917 0 20s8.917 20 20 20z"
          fill="#50AF95"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.531 22.665c-.141.01-.872.054-2.502.054-1.296 0-2.216-.039-2.539-.054-5.01-.22-8.749-1.093-8.749-2.137s3.74-1.915 8.749-2.139v3.407c.328.024 1.266.08 2.562.08 1.556 0 2.334-.066 2.475-.079v-3.405c4.999.223 8.73 1.095 8.73 2.136 0 1.042-3.73 1.914-8.73 2.136h.004zm0-4.626v-3.048h6.977v-4.65H10.514v4.65h6.975v3.047c-5.67.26-9.933 1.384-9.933 2.73 0 1.345 4.263 2.467 9.933 2.729v9.77h5.041v-9.774c5.657-.26 9.913-1.382 9.913-2.727 0-1.344-4.253-2.466-9.913-2.728l.001.001z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_5176">
          <Path fill="#fff" d="M0 0H40V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TetherIcon;
