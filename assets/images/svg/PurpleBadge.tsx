//@ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const PurpleBadge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        stroke="#CFA9FF"
        strokeWidth={1.6}
        d="M11.192 1.528a1.594 1.594 0 0 1 2.482 0l1.478 1.84a1.592 1.592 0 0 0 1.413.586l2.346-.255a1.592 1.592 0 0 1 1.759 1.76l-.255 2.346A1.593 1.593 0 0 0 21 9.22l1.838 1.479a1.594 1.594 0 0 1 0 2.483l-1.844 1.472a1.596 1.596 0 0 0-.586 1.415l.255 2.346a1.594 1.594 0 0 1-1.76 1.76l-2.345-.255a1.59 1.59 0 0 0-1.413.587l-1.472 1.832a1.592 1.592 0 0 1-2.482 0L9.716 20.5a1.593 1.593 0 0 0-1.414-.587l-2.346.255a1.59 1.59 0 0 1-1.759-1.76l.255-2.346a1.596 1.596 0 0 0-.586-1.415l-1.837-1.478a1.592 1.592 0 0 1 0-2.483l1.837-1.479a1.592 1.592 0 0 0 .586-1.413l-.255-2.347a1.594 1.594 0 0 1 1.76-1.76l2.345.255a1.594 1.594 0 0 0 1.414-.586l1.476-1.828Z"
      />
      <G filter="url(#c)">
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m7.833 12 2.3 2.427c.062.071.145.13.243.172a.874.874 0 0 0 .64.015.692.692 0 0 0 .255-.161l5.229-5.12"
          shapeRendering="crispEdges"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-7.94682 -12.89366 16.5458 -10.19777 16.643 18.012)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9A72F1" />
        <Stop offset={0.465} stopColor="#A058EC" />
        <Stop offset={0.957} stopColor="#B366FF" />
      </RadialGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PurpleBadge;
