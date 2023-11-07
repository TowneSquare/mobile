import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function InactivePointIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={17} height={17} rx={8.5} fill="#666" />
      <Path
        d="M9.877 3.83c.2-.23.577-.048.52.252l-.552 2.962a.3.3 0 00.183.333l2.58 1.037a.3.3 0 01.115.476l-4.6 5.28c-.2.23-.577.048-.521-.252l.553-2.962a.3.3 0 00-.183-.333l-2.58-1.037a.3.3 0 01-.115-.475l4.6-5.28z"
        fill="#fff"
      />
      <Rect x={0.5} y={0.5} width={17} height={17} rx={8.5} stroke="#fff" />
    </Svg>
  );
}

export default InactivePointIcon;
