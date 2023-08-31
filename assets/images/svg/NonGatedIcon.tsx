import * as React from 'react';
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  ClipPath,
  SvgProps,
} from 'react-native-svg';

function NonGatedIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 84 85"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2472_1779)">
        <Path
          d="M55.813 35.344H25.186a1.532 1.532 0 00-1.53 1.531v21.438a1.532 1.532 0 001.53 1.53h30.625a1.532 1.532 0 001.532-1.53V36.874a1.532 1.532 0 00-1.532-1.531zM40.5 49.125a3.828 3.828 0 110-7.655 3.828 3.828 0 010 7.655z"
          fill="#fff"
          fillOpacity={0.1}
        />
        <Path
          d="M55.813 35.344H25.186c-.845 0-1.53.685-1.53 1.531v21.438c0 .845.685 1.53 1.53 1.53h30.625c.846 0 1.532-.685 1.532-1.53V36.874c0-.846-.686-1.531-1.532-1.531z"
          stroke="#B882FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M32.844 35.344v-6.125a7.656 7.656 0 017.656-7.657c3.704 0 6.946 2.63 7.656 6.125M40.5 49.125a3.828 3.828 0 100-7.656 3.828 3.828 0 000 7.656zM40.5 49.125v4.594"
          stroke="#B882FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Circle
        cx={41.5}
        cy={43}
        r={37.5}
        stroke="#B882FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <ClipPath id="clip0_2472_1779">
          <Path fill="#fff" transform="translate(16 18.5)" d="M0 0H49V49H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default NonGatedIcon;
