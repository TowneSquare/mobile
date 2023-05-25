//@ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Mask,
  Ellipse,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const Background1 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={600}
    height={800}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="url(#b)" d="M0 0h360v800H0z" />
      <G clipPath="url(#c)">
        <G opacity={0.2}>
          <Mask
            id="d"
            width={150}
            height={416}
            x={326}
            y={226}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <Path
              fill="#5232B0"
              d="M334.645 286.058c-14.018-55.633 47.736-62.747 80.365-59.35 39.88 111.506 100.667 347.945 24.774 401.66-94.867 67.143-132.33-141.48-105.139-183.445 27.191-41.964 17.523-89.324 0-158.865Z"
            />
          </Mask>
          <G mask="url(#d)">
            <Path
              stroke="#DC51FF"
              strokeDasharray="5 10"
              strokeWidth={198}
              d="m304 176.787 169 510"
            />
          </G>
        </G>
        <G opacity={0.2}>
          <Mask
            id="e"
            width={213}
            height={256}
            x={-113}
            y={530}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <Ellipse cx={-6.5} cy={658} fill="#D9D9D9" rx={106.5} ry={128} />
          </Mask>
          <G mask="url(#e)">
            <Path
              stroke="#fff"
              strokeDasharray="5 10"
              strokeWidth={198}
              d="m-70.901 430.024 167.827 501.64"
            />
          </G>
        </G>
        <Path
          fill="url(#f)"
          d="M316.891 117.33C368.55 62.369 336.995 12.184 279.276-6.463L-95-126v826c58.513-54.875 183.063-177.977 213.155-231.383C155.771 401.86 82.42 324.732 80.54 249.549c-1.881-75.183 171.778-63.517 236.351-132.219Z"
          opacity={0.8}
          style={{
            mixBlendMode: 'lighten',
          }}
        />
        <Path
          fill="url(#g)"
          d="M396.559 165.903C463.729 96.846 407 18.5 347.65 10.363L-139-67v965c76.082-68.948 238.026-223.619 277.154-290.721 48.91-83.878-46.464-180.785-48.91-275.249-2.445-94.465 223.354-79.806 307.315-166.127Z"
          opacity={0.8}
          style={{
            mixBlendMode: 'lighten',
          }}
        />
        <Path
          fill="url(#h)"
          d="M183.785 742.254c-82.753 49.319-29.823 129.149 6.987 162.899l450.044 200.677 249.761-932.114c-91.334 46.907-287.793 154.394-342.955 209.082-68.952 68.361-1.909 186.651-23.996 278.529-22.087 91.878-236.399 19.278-339.841 80.927Z"
          opacity={0.8}
          style={{
            mixBlendMode: 'lighten',
          }}
        />
        <Circle cx={212.5} cy={230.5} r={4.5} fill="#944DB7" />
        <Circle cx={220.5} cy={256.5} r={2.5} fill="#944DB7" />
        <Circle cx={231.5} cy={244.5} r={1.5} fill="#944DB7" />
        <Circle cx={239.5} cy={252.5} r={1.5} fill="#944DB7" />
        <Circle
          cx={93.044}
          cy={34.149}
          r={4.5}
          fill="#944DB7"
          transform="rotate(60.532 93.044 34.15)"
        />
        <Circle
          cx={74.343}
          cy={53.904}
          r={2.5}
          fill="#944DB7"
          transform="rotate(60.532 74.343 53.904)"
        />
        <Circle
          cx={90.202}
          cy={57.578}
          r={1.5}
          fill="#944DB7"
          transform="rotate(60.532 90.202 57.578)"
        />
        <Circle
          cx={87.173}
          cy={68.478}
          r={1.5}
          fill="#944DB7"
          transform="rotate(60.532 87.173 68.478)"
        />
        <Circle
          cx={62.487}
          cy={456}
          r={4.5}
          fill="#C179E6"
          transform="rotate(105 62.487 456)"
        />
        <Circle
          cx={132.515}
          cy={592.51}
          r={4.358}
          stroke="#C179E6"
          strokeWidth={2}
          opacity={0.4}
          transform="rotate(105 132.515 592.51)"
        />
        <Circle
          cx={42.651}
          cy={452.755}
          r={2.5}
          fill="#C179E6"
          transform="rotate(105 42.651 452.755)"
        />
        <Circle
          cx={51.395}
          cy={466.486}
          r={1.5}
          fill="#C179E6"
          transform="rotate(105 51.395 466.486)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={54.246}
        x2={542.911}
        y1={639.423}
        y2={432.995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1A103A" />
        <Stop offset={1} stopColor="#39216D" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={124}
        x2={124}
        y1={-126}
        y2={700}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#FF7DD6" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={143.666}
        x2={143.666}
        y1={-67}
        y2={898}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#AC5691" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={368.908}
        x2={618.669}
        y1={1032.98}
        y2={100.858}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4F2AB2" />
        <Stop offset={1} stopColor="#FF7DD6" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h360v800H0z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M-66-206h506v1221H-66z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Background1;
