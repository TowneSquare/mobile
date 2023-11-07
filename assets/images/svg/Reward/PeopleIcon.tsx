import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function PeopleIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_2998_15352)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M20.68 12.514A4.866 4.866 0 0018.5 12a.75.75 0 110-1.5 6.367 6.367 0 015.1 2.55.75.75 0 11-1.2.9 4.866 4.866 0 00-1.72-1.436zM6.5 12a4.867 4.867 0 00-3.9 1.95.75.75 0 01-1.2-.9 6.367 6.367 0 015.1-2.55.75.75 0 010 1.5zM12.5 10.5a3 3 0 100 6 3 3 0 000-6zm-4.5 3a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
        <Path d="M12.5 18a5.344 5.344 0 00-4.604 2.63.75.75 0 01-1.292-.76 6.844 6.844 0 0111.792 0 .75.75 0 01-1.292.76A5.343 5.343 0 0012.5 18zM19.279 6.14a2.25 2.25 0 00-2.959 1.548.75.75 0 01-1.452-.375A3.75 3.75 0 1118.5 12a.75.75 0 110-1.5 2.25 2.25 0 00.779-4.36zM6.956 6.046A2.25 2.25 0 106.5 10.5a.75.75 0 010 1.5 3.751 3.751 0 113.632-4.688.75.75 0 01-1.452.375 2.25 2.25 0 00-1.724-1.64z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2998_15352">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PeopleIcon;
