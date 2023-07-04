import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RepostedIcon = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M7.378.635c.18-.18.472-.18.653 0l2.13 2.13c.18.18.18.473 0 .653l-2.13 2.13a.462.462 0 0 1-.653-.653l1.804-1.803-1.804-1.804a.462.462 0 0 1 0-.653Z"
      clipRule="evenodd"
    />
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M1.314 3.553a.39.39 0 0 0-.39.39v2.32a.462.462 0 0 1-.924 0v-2.32A1.314 1.314 0 0 1 1.314 2.63h8.52a.461.461 0 1 1 0 .923h-8.52ZM4.622 7.452c.18.18.18.472 0 .653L2.818 9.908l1.804 1.804a.462.462 0 1 1-.653.653l-2.13-2.13a.462.462 0 0 1 0-.653l2.13-2.13c.18-.18.473-.18.653 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#AAA"
      fillRule="evenodd"
      d="M11.538 6.275c.255 0 .462.207.462.462v2.32a1.314 1.314 0 0 1-1.314 1.313h-8.52a.462.462 0 0 1 0-.923h8.52a.39.39 0 0 0 .39-.39v-2.32c0-.255.207-.462.462-.462Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default RepostedIcon;
