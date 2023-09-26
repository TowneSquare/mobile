import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MultipleSvg = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 23 22"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.22 4.126a4.698 4.698 0 116.644 6.644A4.698 4.698 0 014.22 4.126zm3.322.457a2.865 2.865 0 100 5.73 2.865 2.865 0 000-5.73z"
      fill="#666"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.542 13.292a5.27 5.27 0 00-5.271 5.271.917.917 0 01-1.833 0 7.104 7.104 0 1114.208 0 .917.917 0 01-1.834 0 5.27 5.27 0 00-5.27-5.27zM14.079 6.446a4.01 4.01 0 115.672 5.672 4.01 4.01 0 01-5.672-5.672zm2.836.659a2.177 2.177 0 100 4.354 2.177 2.177 0 000-4.354z"
      fill="#666"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.53 14.653a4.148 4.148 0 015.532 3.909.917.917 0 001.834-.001 5.981 5.981 0 00-8.051-5.61.928.928 0 00-.103.045c-.953.49-1.563 1.071-1.93 1.669a2.964 2.964 0 00-.458 1.554.917.917 0 101.833 0c0-.114.024-.33.187-.594.159-.26.482-.617 1.157-.972z"
      fill="#666"
    />
  </Svg>
);
export default MultipleSvg;
