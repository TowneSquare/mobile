import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const TowneSquareProfileLogo = (props: SvgProps) => (
  <Svg width={16} height={15} fill="none" {...props}>
    <Path fill="url(#a)" d="M8.345 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
    <Path
      fill="#292B2C"
      d="M6.503 6.283c0-.936.003-1.873-.003-2.809-.001-.151.048-.207.197-.228.499-.072.996-.155 1.493-.24.128-.022.17.013.169.145-.006.499-.002.998-.002 1.498 0 .176.086.264.258.264H10.4c.188.001.192.006.192.197 0 .398-.002.797.003 1.195.001.12-.043.158-.16.158-.639-.004-1.277 0-1.916-.003-.104 0-.163.024-.162.143.006.797.008 1.594.015 2.39.001.11.023.22.046.328.11.5.375.72.886.737.392.012.775-.045 1.149-.165.099-.032.15-.02.17.093.066.398.138.795.212 1.191.016.087-.007.134-.09.165-.86.325-1.744.397-2.632.173-.865-.217-1.365-.806-1.514-1.68a6.556 6.556 0 0 1-.092-1.001c-.013-.85-.005-1.7-.005-2.55Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={54.985}
        x2={-7.827}
        y1={-59.766}
        y2={7.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TowneSquareProfileLogo;
