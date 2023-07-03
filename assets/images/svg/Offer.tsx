import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Offer = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M17.75 8.397v-.522c0-2.351-3.547-4.125-8.25-4.125-4.703 0-8.25 1.774-8.25 4.125v3.75c0 1.958 2.46 3.515 6 3.98v.52c0 2.351 3.547 4.125 8.25 4.125 4.703 0 8.25-1.774 8.25-4.125v-3.75c0-1.94-2.383-3.499-6-3.978Zm4.5 3.978c0 1.24-2.887 2.625-6.75 2.625-.35 0-.697-.012-1.039-.035 2.022-.737 3.289-1.934 3.289-3.34V9.913c2.8.417 4.5 1.55 4.5 2.462Zm-15 1.71v-2.23A17.22 17.22 0 0 0 9.5 12a17.22 17.22 0 0 0 2.25-.144v2.23c-.745.11-1.497.165-2.25.164-.753 0-1.505-.054-2.25-.164Zm9-3.78v1.32c0 .787-1.163 1.631-3 2.144v-2.19c1.21-.294 2.235-.731 3-1.273ZM9.5 5.25c3.863 0 6.75 1.386 6.75 2.625 0 1.24-2.887 2.625-6.75 2.625S2.75 9.114 2.75 7.875c0-1.24 2.887-2.625 6.75-2.625Zm-6.75 6.375v-1.32c.765.543 1.79.98 3 1.273v2.191c-1.837-.513-3-1.357-3-2.144Zm6 4.5v-.39a18.072 18.072 0 0 0 1.818-.017c.387.138.782.256 1.182.352v2.2c-1.837-.514-3-1.358-3-2.145Zm4.5 2.46V16.35a17.22 17.22 0 0 0 4.5.006v2.23a15.507 15.507 0 0 1-4.5 0Zm6-.316v-2.19c1.21-.294 2.235-.731 3-1.273v1.319c0 .787-1.163 1.631-3 2.144Z"
    />
  </Svg>
);
export default Offer;
