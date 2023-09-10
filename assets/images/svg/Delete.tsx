import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function Delete(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 20"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H.75A.75.75 0 010 4zM6.75 7.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM11.25 7.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z"
        fill="#FF4471"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3.25A.75.75 0 013 4v14.25h12V4a.75.75 0 011.5 0v14.25a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V4a.75.75 0 01.75-.75z"
        fill="#FF4471"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.159.909A2.25 2.25 0 016.75.25h4.5A2.25 2.25 0 0113.5 2.5V4A.75.75 0 0112 4V2.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 006 2.5V4a.75.75 0 01-1.5 0V2.5c0-.597.237-1.169.659-1.591z"
        fill="#FF4471"
      />
    </Svg>
  );
}

export default Delete;
