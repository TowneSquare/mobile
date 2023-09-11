import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function NftIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2618_5671)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.092 3.033A1.75 1.75 0 002 4.75V13c0 5.189 4.563 9.25 10 9.25S22 18.19 22 13V4.748a1.75 1.75 0 00-3.035-1.183l-1.483 1.706a10.644 10.644 0 00-2.042-.95.992.992 0 00-.263-.086 10.643 10.643 0 00-6.354 0 .993.993 0 00-.263.086c-.71.243-1.395.56-2.042.95L5.036 3.563a1.75 1.75 0 00-.944-.53zM8 6.731a8.644 8.644 0 00-1.075.666 1 1 0 01-1.342-.154L4 5.421v7.58c0 3.627 2.992 6.744 7 7.194v-1.53l-1.207-1.208a1 1 0 111.414-1.414l.793.793.793-.793a1 1 0 011.414 1.414L13 18.664v1.53c4.008-.449 7-3.566 7-7.194V5.423l-1.583 1.82a1 1 0 01-1.342.154A8.647 8.647 0 0016 6.731V8.5a1 1 0 11-2 0V5.985a8.64 8.64 0 00-1-.177V8.5a1 1 0 11-2 0V5.808a8.64 8.64 0 00-1 .177V8.5a1 1 0 01-2 0V6.731zm1 6.644a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm7.125 1.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2618_5671">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default NftIcon;
