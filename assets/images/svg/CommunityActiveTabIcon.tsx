import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Circle,
  SvgProps,
} from 'react-native-svg';

function CommunityActiveTabIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2975_12666)" fill="#fff">
        <Circle cx={8.5887} cy={7.70588} r={4.70588} />
        <Path
          d="M8.588 12.412A6.588 6.588 0 002.003 18.8c-.003.11.087.2.197.2h12.776c.11 0 .2-.09.197-.2a6.588 6.588 0 00-6.585-6.388z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Circle cx={17.5295} cy={9.5217} r={3.69748} />
        <Path
          d="M22.496 17.3c-.097-2.725-2.176-4.081-4.967-4.081a5.162 5.162 0 00-3.748 1.605L15 16.5l.5 1h6.8c.111 0 .2-.09.197-.2z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2975_12666">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CommunityActiveTabIcon;
