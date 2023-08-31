import * as React from "react"
import { SVGProps } from "react"
const CommunityNarBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={18}
    fill="none"
    {...props}
  >
    <rect width={20.224} height={17.327} x={0.887} fill="#222" rx={2} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.498 4.664h11M5.498 8.664h11M5.498 12.664h11"
    />
  </svg>
)
export default CommunityNarBar
