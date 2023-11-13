import { Dimensions } from 'react-native';
import { sizes } from '../../../src/utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
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
const Queen = (props: SvgProps) => (
  <Svg
    width={size.getWidthSize(18)}
    height={size.getHeightSize(19)}
    viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2427_5280)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M8.048 1.018a1.223 1.223 0 011.905 0l1.134 1.41a1.222 1.222 0 001.085.45l1.8-.195a1.222 1.222 0 011.35 1.35l-.196 1.8a1.222 1.222 0 00.45 1.084l1.41 1.134a1.222 1.222 0 010 1.905l-1.415 1.129a1.223 1.223 0 00-.45 1.085l.196 1.8a1.22 1.22 0 01-1.35 1.35l-1.8-.196a1.221 1.221 0 00-1.085.45L9.954 16.98a1.22 1.22 0 01-1.905 0l-1.133-1.41a1.224 1.224 0 00-1.086-.45l-1.8.196a1.221 1.221 0 01-1.35-1.35l.196-1.8a1.223 1.223 0 00-.45-1.085l-1.41-1.134a1.222 1.222 0 010-1.905l1.41-1.134a1.221 1.221 0 00.45-1.084l-.196-1.8a1.222 1.222 0 011.35-1.35l1.8.195a1.224 1.224 0 001.086-.45l1.133-1.401z"
          fill="url(#paint0_linear_2427_5280)"
          stroke="#FEDF89"
          strokeWidth={1.125}
        />
        <Path
          d="M12.307 10.627l.44-3.317a.25.25 0 00-.36-.26L10.96 8.137a.25.25 0 01-.363-.05l-1.41-2.06a.243.243 0 00-.373 0l-1.41 2.06a.25.25 0 01-.364.05L5.614 7.05a.25.25 0 00-.36.26l.44 3.333"
          stroke="#fff"
        />
        <Path
          d="M12 10.56H6a.75.75 0 100 1.5h6a.75.75 0 100-1.5z"
          stroke="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2427_5280"
          x1={9.00062}
          y1={0.561523}
          x2={9.00062}
          y2={17.4366}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEC84B" />
          <Stop offset={1} stopColor="#F79009" />
        </LinearGradient>
        <ClipPath id="clip0_2427_5280">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
);
export default Queen;
