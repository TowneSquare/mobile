import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SupportEmailSvg(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Rect width={32} height={32} rx={16} fill="#9264F8" />
      <G
        clipPath="url(#clip0_3019_5718)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M8.072 9.977a.622.622 0 01.88-.038L16 16.401l7.049-6.462a.623.623 0 01.841.918l-7.47 6.847a.623.623 0 01-.84 0l-7.47-6.847a.622.622 0 01-.038-.88z" />
        <Path d="M7.908 10.398c0-.344.279-.623.622-.623h14.94c.343 0 .622.28.622.623V20.98a1.245 1.245 0 01-1.245 1.245H9.153a1.245 1.245 0 01-1.245-1.245V10.398zm1.245.622v9.96h13.694v-9.96H9.153z" />
        <Path d="M15.101 15.58a.622.622 0 01-.038.879l-5.92 5.426a.622.622 0 11-.84-.918l5.919-5.426a.622.622 0 01.88.038zM16.899 15.58a.623.623 0 01.88-.039l5.919 5.426a.623.623 0 01-.841.918l-5.92-5.426a.622.622 0 01-.038-.88z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3019_5718">
          <Path
            fill="#fff"
            transform="translate(6.04 6.04)"
            d="M0 0H19.9187V19.9187H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SupportEmailSvg;
