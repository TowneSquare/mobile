import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ToastInfoIcon = (props: SvgProps) => (
  <Svg
  
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 9a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm6.188-.6c0-.497.383-.9.857-.9.397 0 .779.166 1.06.461.282.296.44.696.44 1.114v3.178c.37.1.643.453.643.872 0 .497-.384.9-.858.9-.397 0-.779-.166-1.06-.462a1.616 1.616 0 0 1-.44-1.113V9.272a.894.894 0 0 1-.643-.872Zm2.287-3.075a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ToastInfoIcon;
