// @ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const Background2 = (props: SvgProps) => (
  <Svg width={360} height={796} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#111" d="M0 0h360v796H0z" />
      <Circle cx={319.5} cy={187} r={4.5} fill="#6E3B6E" />
      <Circle cx={327.5} cy={213} r={2.5} fill="#6E3B6E" />
      <Circle cx={338.5} cy={201} r={1.5} fill="#6E3B6E" />
      <Circle cx={346.5} cy={209} r={1.5} fill="#6E3B6E" />
      <Circle
        cx={59.108}
        cy={637.108}
        r={5.158}
        fill="#462866"
        transform="rotate(118.693 59.108 637.108)"
      />
      <Circle
        cx={41.472}
        cy={629.906}
        r={3.338}
        fill="#462866"
        transform="rotate(118.693 41.472 629.906)"
      />
      <Circle
        cx={47.035}
        cy={655.036}
        r={1.5}
        fill="#462866"
        transform="rotate(118.693 47.035 655.036)"
      />
      <Circle
        cx={35.525}
        cy={647.357}
        r={1.5}
        fill="#462866"
        transform="rotate(118.693 35.525 647.357)"
      />
      <Path
        stroke="#fff"
        strokeDasharray="100 100"
        strokeWidth={3}
        d="M27 23.862c-79.046 59.513-255.578 70.456-229.998 108.252l120.544 46.234c152.35 58.431 324.339 30.612 450.499-72.869l93.013-76.292.452-352.45c-85.947 56.998-27.967-130.952-84.41-66.108-70.554 81.056-240.619 5.423-306.605 94.803C-8.045-188.183 125.806-50.528 27 23.862Z"
        opacity={0.2}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        stroke="#fff"
        strokeWidth={3}
        d="M27 1030.14c-79.046 59.51-255.578 70.45-229.998 108.25l120.544 46.23c152.35 58.44 324.339 30.62 450.499-72.86l93.013-76.3.452-352.448c-85.947 56.999-27.967-130.952-84.41-66.107-70.554 81.056-240.619 5.423-306.605 94.803C-8.045 818.093 125.806 955.747 27 1030.14Z"
        opacity={0.2}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        fill="url(#b)"
        d="M319.576-131.036c49.592-53.878 19.3-103.074-36.111-121.353L-75.84-369.571v809.724c56.173-53.794 175.74-174.47 204.629-226.824C164.9 147.887 94.484 72.279 92.678-1.422c-1.806-73.702 164.907-62.266 226.898-129.614Z"
        opacity={0.5}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        fill="url(#c)"
        d="M80.709 682.639c-65.228 66.948 2.996 129.9 45.262 153.008l466.314 81.226 10.472-945.925C528.976 37.69 371.84 187.51 333.551 252.852c-47.86 81.678 42.642 177.726 43.964 270.35 1.322 92.624-215.272 75.753-296.806 159.437Z"
        opacity={0.5}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
      <Path
        stroke="#fff"
        strokeWidth={3}
        d="M-13.24 571.547C-73.51 499.92-41.87 698.151-6.532 731.236l382.373-56.679 18.241-294.089c0-37.251-5.082-214.905-58.037-161.294-66.194 67.014-1.833 182.973-23.037 273.041-21.203 90.068-239.567 182.342-326.246 79.332Z"
        opacity={0.2}
        style={{
          mixBlendMode: 'lighten',
        }}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={134.4}
        x2={134.4}
        y1={-369.571}
        y2={440.153}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#FF7DD6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={322.063}
        x2={332.982}
        y1={913.754}
        y2={-32.166}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#FF7DD6" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h360v796H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Background2;
