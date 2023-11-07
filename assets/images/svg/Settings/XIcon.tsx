import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function XIcon(props:SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
     
      {...props}
    >
      <Rect x={0.5} y={0.5} width={31} height={31} rx={15.5} fill="#000" />
      <Path
        d="M9.532 9.916l5.019 6.711L9.5 22.084h1.137l4.422-4.777 3.573 4.777H22.5l-5.302-7.089L21.9 9.916h-1.137l-4.073 4.4-3.29-4.4H9.532zm1.671.838h1.777l7.848 10.492h-1.777l-7.848-10.492z"
        fill="#fff"
      />
      <Rect x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke="#404040" />
    </Svg>
  );
}

export default XIcon;
