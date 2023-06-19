// @ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const Background3 = (props: SvgProps) => (
  <Svg width={360} height={796} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#101323" d="M0 0h360v796H0z" />
      <Path
        fill="url(#b)"
        d="M268.377 29.314c64.483-67.696 10.023-144.499-46.953-152.476L-245.76-199v945.985c73.038-67.589 228.505-219.213 266.068-284.993 46.954-82.225-44.605-177.222-46.953-269.825-2.348-92.603 214.419-78.233 295.022-162.853Z"
        opacity={0.3}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        fill="url(#c)"
        d="M62.78 762.765c-64.482 67.696-10.023 144.499 46.953 152.476l467.184 75.838V45.094c-73.038 67.589-228.505 219.213-266.068 284.993-46.953 82.225 44.606 177.222 46.953 269.825 2.348 92.603-214.419 78.234-295.022 162.853Z"
        opacity={0.2}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        stroke="#fff"
        strokeWidth={2}
        d="M56.01 696.851c-64.373 73.869-10.005 157.676 46.874 166.38l466.396 82.754V-86.266c-72.915 73.753-228.12 239.204-265.619 310.982-46.874 89.723 44.53 193.384 46.874 294.431 2.344 101.048-214.058 85.368-294.525 177.704Z"
        opacity={0.2}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={25.6}
        x2={25.6}
        y1={-199}
        y2={746.985}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#AC5691" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={305.558}
        x2={305.558}
        y1={991.079}
        y2={45.094}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF74B2" />
        <Stop offset={1} stopColor="#7F56D9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h360v796H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Background3;
