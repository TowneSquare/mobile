import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function OpenLinkIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2885_8968)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#B882FF"
      >
        <Path d="M11.167 3.625c0-.391.317-.708.708-.708h5c.39 0 .707.318.707.709l.001 4.999a.708.708 0 11-1.416 0l-.001-4.291h-4.291a.708.708 0 01-.708-.71z" />
        <Path d="M17.376 3.124a.708.708 0 010 1.002l-6.25 6.25a.708.708 0 01-1.002-1.002l6.25-6.25a.708.708 0 011.002 0z" />
        <Path d="M3.833 6.833h5.542a.708.708 0 100-1.416H3.75A1.333 1.333 0 002.417 6.75v10a1.333 1.333 0 001.333 1.333h10a1.334 1.334 0 001.333-1.333v-5.625a.708.708 0 10-1.416 0v5.542H3.833V6.833z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2885_8968">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default OpenLinkIcon;
