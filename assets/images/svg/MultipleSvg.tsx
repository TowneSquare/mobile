import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MultipleSvg = (props: SvgProps) => (
  <Svg width={24} height={22} fill="none" {...props}>
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M4.553 4.126a4.698 4.698 0 1 1 6.644 6.644 4.698 4.698 0 0 1-6.644-6.644Zm3.322.457a2.865 2.865 0 1 0 0 5.73 2.865 2.865 0 0 0 0-5.73Z"
      clipRule="evenodd"
    />
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M7.875 13.292a5.27 5.27 0 0 0-5.27 5.27.917.917 0 1 1-1.834 0 7.104 7.104 0 0 1 14.208 0 .917.917 0 1 1-1.833 0 5.27 5.27 0 0 0-5.27-5.27ZM14.413 6.446a4.01 4.01 0 1 1 5.672 5.671 4.01 4.01 0 0 1-5.672-5.672Zm2.836.658a2.177 2.177 0 1 0 0 4.354 2.177 2.177 0 0 0 0-4.354Z"
      clipRule="evenodd"
    />
    <Path
      fill="#666"
      fillRule="evenodd"
      d="M15.865 14.653a4.148 4.148 0 0 1 5.531 3.91.917.917 0 1 0 1.834-.002 5.982 5.982 0 0 0-8.051-5.61.92.92 0 0 0-.103.046c-.953.49-1.563 1.07-1.93 1.668a2.964 2.964 0 0 0-.459 1.554.917.917 0 1 0 1.834 0c0-.113.024-.329.187-.594.159-.259.482-.616 1.157-.972Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MultipleSvg;
