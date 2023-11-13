import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ComminsoonPathIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 160 17"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149.886 1.845a2 2 0 01-1.795 2.145L101.849 8.6c17.004-.507 34.62-.747 56.146-.799a2 2 0 01.01 4c-54.032.13-83.355 1.449-140.425 5.196a2 2 0 01-.33-3.986l66.564-6.634c-29.443.542-59.138.286-81.96-1.381a2 2 0 11.292-3.99C42.239 3.935 103.878 2.48 147.78.003a2 2 0 012.106 1.842z"
        fill="#00EEFD"
      />
    </Svg>
  );
}

export default ComminsoonPathIcon;
