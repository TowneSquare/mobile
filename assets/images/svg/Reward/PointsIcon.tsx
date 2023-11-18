import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
function PointsIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path d="M16 8A8 8 0 110 8a8 8 0 0116 0z" fill="#121212" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15.021A7.021 7.021 0 108 .979a7.021 7.021 0 000 14.042zM8 16A8 8 0 108 0a8 8 0 000 16z"
        fill="#45A9A7"
      />
      <Path
        d="M12.19 4.693a5.187 5.187 0 10.173 6.417l-1.817-1.354a2.921 2.921 0 11-.098-3.613l1.742-1.45z"
        fill="#fff"
      />
      <Path
        d="M12.19 4.693A5.186 5.186 0 006.219 3.22l.867 2.093a2.92 2.92 0 013.362.83l1.742-1.45z"
        fill="url(#paint0_linear_3197_4252)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.092 6.097c.096.034.146.14.112.237l-.736 2.045a.185.185 0 01-.237.111l-.523-.188a.185.185 0 01-.112-.237l.736-2.045a.185.185 0 01.237-.111l.523.188z"
        fill="#4CB3AD"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3197_4252"
          x1={3.40547}
          y1={4.00765}
          x2={11.5737}
          y2={9.78246}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80FFD9" />
          <Stop offset={0.978741} stopColor="#01476E" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default PointsIcon;
