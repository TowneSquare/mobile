import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function TheterIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 134 116"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2427_4462)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M24.856.728L.606 51.666a.988.988 0 00.211 1.152l65.495 62.76a1 1 0 001.383 0l65.495-62.756a.984.984 0 00.212-1.152L109.151.732a.98.98 0 00-.893-.572h-82.5a.98.98 0 00-.902.568z"
          fill="#50AF95"
        />
        <Path
          d="M75.415 56.891c-.47.036-2.9.18-8.318.18-4.31 0-7.37-.129-8.444-.18-16.657-.732-29.09-3.632-29.09-7.104 0-3.471 12.433-6.367 29.09-7.111v11.328c1.089.078 4.208.262 8.518.262 5.172 0 7.762-.215 8.229-.258V42.683c16.621.741 29.027 3.64 29.027 7.104s-12.402 6.364-29.027 7.1l.015.004zm0-15.38V31.376h23.197V15.917H35.456v15.458H58.65v10.133c-18.851.866-33.028 4.6-33.028 9.075s14.177 8.205 33.028 9.075V92.14H75.41V59.646c18.808-.866 32.961-4.596 32.961-9.067 0-4.47-14.14-8.201-32.96-9.071l.003.004z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2427_4462">
          <Path
            fill="#fff"
            transform="translate(.5 .152)"
            d="M0 0H133V115.697H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default TheterIcon;
