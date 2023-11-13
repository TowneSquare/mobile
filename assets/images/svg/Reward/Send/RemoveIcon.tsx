import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function RemoveIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Rect width={24} height={24} rx={12} fill="#000" fillOpacity={0.7} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.143 7.857a.556.556 0 010 .786l-7.5 7.5a.556.556 0 01-.786-.786l7.5-7.5a.556.556 0 01.786 0z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.857 7.857a.556.556 0 01.786 0l7.5 7.5a.556.556 0 01-.786.786l-7.5-7.5a.556.556 0 010-.786z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RemoveIcon;
