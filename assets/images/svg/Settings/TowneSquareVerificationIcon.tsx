//@ts-nocheck

import * as React from 'react';
import Svg, { Path, G, Defs, SvgProps } from 'react-native-svg';

function TowneSquareVerificationIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10.892 2.713a1.421 1.421 0 012.216 0l1.319 1.641a1.42 1.42 0 001.26.524l2.094-.228a1.421 1.421 0 011.57 1.57l-.227 2.095a1.422 1.422 0 00.523 1.262l1.64 1.32a1.421 1.421 0 010 2.217l-1.645 1.313a1.424 1.424 0 00-.524 1.263l.228 2.095a1.423 1.423 0 01-1.57 1.57l-2.094-.227a1.42 1.42 0 00-1.26.523l-1.314 1.636a1.421 1.421 0 01-2.216 0l-1.318-1.64a1.422 1.422 0 00-1.262-.525l-2.094.228a1.42 1.42 0 01-1.57-1.57l.228-2.095a1.424 1.424 0 00-.523-1.263l-1.64-1.319a1.421 1.421 0 010-2.216l1.64-1.32a1.42 1.42 0 00.523-1.262L4.648 6.21a1.422 1.422 0 011.57-1.57l2.094.227a1.423 1.423 0 001.262-.523l1.318-1.631z"
        stroke="#fff"
        strokeWidth={2}
      />
      <G filter="url(#filter0_d_3019_5579)">
        <Path
          d="M7.636 12l2.027 1.985a.587.587 0 00.214.142.826.826 0 00.564.012.618.618 0 00.225-.132l4.607-4.189"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default TowneSquareVerificationIcon;
