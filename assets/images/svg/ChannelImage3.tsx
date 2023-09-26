//@ts-nocheck
import * as React from 'react';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';

function ChannelImage3(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 48 54"
      fill="none"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        d="M22.45 2.163l.744 1.29-.744-1.29L3.265 13.239a3.1 3.1 0 00-1.55 2.685v22.152a3.1 3.1 0 001.55 2.685L22.45 51.837a3.1 3.1 0 003.1 0l19.185-11.076a3.1 3.1 0 001.55-2.685V15.924a3.1 3.1 0 00-1.55-2.685L25.55 2.163a3.1 3.1 0 00-3.1 0z"
        fill="url(#pattern0)"
        stroke="#404040"
        strokeWidth={3}
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_2427_10884" transform="scale(.0025)" />
        </Pattern>
        <Image
          id="image0_2427_10884"
          width={400}
          height={400}
          xlinkHref="data:image/jpeg;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default ChannelImage3;
