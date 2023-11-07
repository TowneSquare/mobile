import * as React from 'react';
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function FirstEarnerIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Path
        d="M8.062 16.994l4.518-1.72 4.518-1.72-.373-7.702a.264.264 0 00-.46-.17L13.65 8.52a.267.267 0 01-.36.029L8.975 5.164a.265.265 0 00-.422.16l-.975 5.402a.266.266 0 01-.288.217l-3.835-.381a.265.265 0 00-.23.434l4.838 5.998z"
        fill="url(#paint0_linear_2990_15401)"
        stroke="#E49520"
        strokeWidth={1.03434}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        transform="rotate(-20.84 6.78 17.482)"
        fill="url(#paint1_linear_2990_15401)"
        stroke="#E49520"
        strokeWidth={1.03434}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.77966 17.4816H19.191760000000002V19.55028H6.77966z"
      />
      <Circle
        cx={9.09328}
        cy={14.1107}
        r={0.775756}
        transform="rotate(-20.84 9.093 14.11)"
        fill="#F55"
      />
      <Circle
        cx={11.9933}
        cy={13.0067}
        r={0.775756}
        transform="rotate(-20.84 11.993 13.007)"
        fill="#95F0F6"
      />
      <Circle
        cx={14.8934}
        cy={11.903}
        r={0.775756}
        transform="rotate(-20.84 14.893 11.903)"
        fill="#F55"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2990_15401"
          x1={8.71856}
          y1={5.1251}
          x2={18.2409}
          y2={15.6088}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FDCD73" />
          <Stop offset={0.124555} stopColor="#FFDE9F" />
          <Stop offset={0.628774} stopColor="#FBAA12" />
          <Stop offset={1} stopColor="#FBAA12" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2990_15401"
          x1={12.9857}
          y1={17.4816}
          x2={12.9942}
          y2={20.8556}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FDCD73" />
          <Stop offset={0.628774} stopColor="#FBAA12" />
          <Stop offset={1} stopColor="#FBAA12" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default FirstEarnerIcon;
