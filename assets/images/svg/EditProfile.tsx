import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const EditProfilePen = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G clip-path="url(#clip0_1938_715)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0608 4.10349L4.75 15.4143V19.2501H8.58577L19.8965 7.93661L16.0608 4.10349ZM14.8238 2.51216C15.1519 2.18422 15.5969 2 16.0608 2C16.5247 2 16.9697 2.18421 17.2978 2.51215C17.2978 2.51215 17.2978 2.51215 17.2978 2.51215L21.4875 6.69903C21.8154 7.02718 22.0001 7.4726 22.0001 7.93653C22.0001 8.40046 21.8159 8.8454 21.488 9.17356L9.92657 20.7378C9.59863 21.0653 9.15366 21.2499 8.69015 21.2501H4.5C4.03587 21.2501 3.59075 21.0657 3.26256 20.7376C2.93437 20.4094 2.75 19.9643 2.75 19.5001V15.3104C2.75021 14.8469 2.93431 14.402 3.26188 14.074L14.8238 2.51216Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0429 5.29289C12.4334 4.90237 13.0666 4.90237 13.4571 5.29289L18.7071 10.5429C19.0976 10.9334 19.0976 11.5666 18.7071 11.9571C18.3166 12.3476 17.6834 12.3476 17.2929 11.9571L12.0429 6.70711C11.6524 6.31658 11.6524 5.68342 12.0429 5.29289Z"
        fill="white"
      />
    </G>
    <Defs />
    <ClipPath id="clip0_1938_715">
      <Rect width="24" height="24" fill="white" />
    </ClipPath>
    <Defs />
  </Svg>
);
export default EditProfilePen;
