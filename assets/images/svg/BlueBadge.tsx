import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const BlueBadge = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        stroke="#89BFFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M23.7 12c0 6.186-5.014 11.2-11.2 11.2-6.186 0-11.2-5.014-11.2-11.2C1.3 5.814 6.314.8 12.5.8 18.686.8 23.7 5.814 23.7 12Z"
      />
      <G clipPath="url(#c)" filter="url(#d)">
        <Path
          fill="#fff"
          d="m12.905 6.385 1.285 3.062a.443.443 0 0 0 .369.27l3.289.284a.442.442 0 0 1 .25.779l-2.494 2.176a.448.448 0 0 0-.14.437l.747 3.238a.443.443 0 0 1-.658.48l-2.826-1.714a.44.44 0 0 0-.456 0L9.445 17.11a.443.443 0 0 1-.658-.48l.748-3.238a.447.447 0 0 0-.14-.437L6.898 10.78A.443.443 0 0 1 7.15 10l3.29-.284a.443.443 0 0 0 .368-.27l1.285-3.062a.442.442 0 0 1 .812 0Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M5.419 4.786h14.16v14.16H5.419z" />
      </ClipPath>
      <LinearGradient
        id="b"
        x1={12.5}
        x2={18.978}
        y1={0}
        y2={19.859}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#20A1FF" />
        <Stop offset={1} stopColor="#1146CD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BlueBadge;
