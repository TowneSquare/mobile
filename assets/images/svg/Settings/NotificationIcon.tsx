import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function NotificationIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.246 1a1 1 0 10-2 0v1.065a7.75 7.75 0 00-6.75 7.685c0 3.248-.76 5.757-1.262 6.625A1.75 1.75 0 002.74 19h3.634a4 4 0 007.746 0h3.63a1.75 1.75 0 001.51-2.625l-.001-.001c-.503-.868-1.262-3.375-1.262-6.624a7.75 7.75 0 00-6.75-7.685V1zm-1 3a5.75 5.75 0 00-5.75 5.75c0 3.159-.661 5.839-1.334 7.25H17.33c-.673-1.412-1.334-4.09-1.334-7.25A5.75 5.75 0 0010.245 4zm1.414 15.414a2 2 0 00.318-.414H8.514a2 2 0 003.146.414z"
        fill="#fff"
      />
    </Svg>
  );
}

export default NotificationIcon;
