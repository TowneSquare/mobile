import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const TownesquareGradient = (props: SvgProps) => (
  <Svg
  
    width={85}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M8.25.414v1.864H5.476V9.87H3.618V2.278H.845V.414H8.25Z"
    />
    <Path
      fill="url(#b)"
      d="M11.544 10.045c-.62 0-1.185-.16-1.696-.48a3.59 3.59 0 0 1-1.219-1.283 3.618 3.618 0 0 1-.45-1.79c0-.495.087-.956.262-1.384a3.62 3.62 0 0 1 .72-1.135 3.38 3.38 0 0 1 1.077-.77 3.134 3.134 0 0 1 1.306-.277c.62 0 1.183.16 1.69.48a3.5 3.5 0 0 1 1.218 1.29c.305.54.458 1.14.458 1.797 0 .49-.088.95-.262 1.377a3.66 3.66 0 0 1-.727 1.135 3.352 3.352 0 0 1-1.07.763c-.405.185-.84.277-1.307.277Zm0-1.864c.287 0 .545-.076.774-.23.23-.157.409-.364.539-.62.13-.258.195-.537.195-.838 0-.311-.07-.595-.209-.851a1.63 1.63 0 0 0-.545-.622 1.328 1.328 0 0 0-.754-.23c-.283 0-.538.08-.767.237-.23.158-.411.365-.546.621a1.84 1.84 0 0 0-.195.845c0 .32.068.607.202.864.14.252.323.453.552.601.229.149.48.223.754.223Z"
    />
    <Path
      fill="url(#c)"
      d="M19.279 9.87h-1.831l-2.249-6.754h1.818L18.37 7.16l1.34-4.045h1.817l1.34 4.045 1.346-4.045h1.825L23.782 9.87h-1.824l-1.34-4.053-1.34 4.053Z"
    />
    <Path
      fill="url(#d)"
      d="M33.257 5.574V9.87h-1.858V6.087c0-.238-.059-.452-.176-.641a1.246 1.246 0 0 0-1.09-.628 1.246 1.246 0 0 0-1.097.628c-.113.189-.169.403-.169.641V9.87H27.01l-.006-6.754h1.858l.006.5c.225-.217.487-.386.788-.507.305-.122.626-.183.963-.183.489 0 .93.12 1.326.358.4.24.718.559.956.96.238.396.357.84.357 1.33Z"
    />
    <Path
      fill="url(#e)"
      d="M37.433 10.045c-.62 0-1.185-.16-1.697-.48a3.575 3.575 0 0 1-1.218-1.29 3.618 3.618 0 0 1-.451-1.79c0-.49.087-.95.262-1.377.175-.432.416-.81.72-1.135a3.38 3.38 0 0 1 1.078-.77 3.134 3.134 0 0 1 1.306-.277c.534 0 1.02.115 1.46.345.445.23.82.543 1.125.939.31.396.53.844.66 1.344.134.5.157 1.02.067 1.56h-4.672c.058.198.148.378.27.54.125.158.277.284.457.379.184.094.395.144.633.148.233.005.449-.05.646-.162.197-.113.366-.263.505-.452l1.898.439a3.606 3.606 0 0 1-1.225 1.472 3.118 3.118 0 0 1-1.824.567Zm-1.427-4.309h2.86a1.67 1.67 0 0 0-.296-.608 1.53 1.53 0 0 0-.505-.425 1.317 1.317 0 0 0-.632-.156c-.225 0-.436.052-.633.156a1.552 1.552 0 0 0-.498.425 1.742 1.742 0 0 0-.296.608Z"
    />
    <Path
      fill="url(#f)"
      d="M45.431 10.045c-.53 0-1.037-.083-1.521-.25a3.822 3.822 0 0 1-1.266-.722 2.703 2.703 0 0 1-.774-1.122l1.744-.648a.983.983 0 0 0 .336.432c.17.13.384.239.64.325.255.08.536.121.841.121.292 0 .566-.043.821-.128.26-.09.47-.214.626-.372a.75.75 0 0 0 .243-.553.66.66 0 0 0-.25-.527c-.165-.14-.379-.25-.639-.331a5.336 5.336 0 0 0-.8-.196 7.771 7.771 0 0 1-1.825-.48c-.534-.225-.956-.533-1.266-.925-.31-.396-.464-.898-.464-1.506 0-.585.163-1.097.491-1.533A3.324 3.324 0 0 1 43.674.61a4.25 4.25 0 0 1 1.757-.365c.52 0 1.023.083 1.508.25.485.167.907.408 1.266.723.363.315.623.693.78 1.134l-1.743.635a.944.944 0 0 0-.337-.425 2.074 2.074 0 0 0-.64-.318 2.75 2.75 0 0 0-.834-.121 2.378 2.378 0 0 0-.821.128c-.256.09-.467.214-.633.372a.735.735 0 0 0-.242.54c0 .266.076.466.229.601.157.135.363.232.619.29.256.059.538.11.848.156a6.63 6.63 0 0 1 1.764.506c.538.239.97.559 1.292.96.328.396.492.88.492 1.452 0 .585-.164 1.096-.492 1.533a3.27 3.27 0 0 1-1.299 1.02 4.22 4.22 0 0 1-1.757.364Z"
    />
    <Path
      fill="url(#g)"
      d="M53.36 10.059a3.43 3.43 0 0 1-1.785-.48c-.534-.32-.96-.75-1.279-1.29a3.47 3.47 0 0 1-.478-1.796c0-.491.092-.95.276-1.378a3.604 3.604 0 0 1 1.892-1.898 3.418 3.418 0 0 1 1.373-.277c.39 0 .736.086 1.037.257.3.166.556.382.767.648v-.73h1.858v10.132h-1.858V9.154a2.68 2.68 0 0 1-.767.648 2.06 2.06 0 0 1-1.037.257Zm.026-5.33c-.31 0-.59.082-.841.244a1.715 1.715 0 0 0-.6.642 1.773 1.773 0 0 0-.222.878c0 .328.074.625.223.891.148.266.347.477.599.635.25.158.531.236.841.236.305 0 .579-.078.821-.236.247-.158.44-.37.58-.635a1.87 1.87 0 0 0 .215-.891c0-.325-.072-.62-.216-.885a1.643 1.643 0 0 0-.579-.635 1.444 1.444 0 0 0-.82-.243Z"
    />
    <Path
      fill="url(#h)"
      d="M58.118 7.398V3.116h1.858v3.768c0 .239.056.455.168.649.117.189.272.34.465.452.193.113.404.17.632.17a1.262 1.262 0 0 0 1.097-.621 1.27 1.27 0 0 0 .169-.65V3.116h1.858l.007 6.754h-1.858l-.007-.514c-.224.216-.49.385-.794.507-.301.121-.62.182-.956.182-.485 0-.927-.12-1.326-.358a2.732 2.732 0 0 1-.956-.952 2.57 2.57 0 0 1-.357-1.337Z"
    />
    <Path
      fill="url(#i)"
      d="M70.533 3.116h1.858V9.87h-1.864l-.088-.703a2.07 2.07 0 0 1-.673.635 1.855 1.855 0 0 1-.963.243c-.502 0-.971-.094-1.407-.283a3.694 3.694 0 0 1-1.932-1.938 3.648 3.648 0 0 1-.276-1.42 3.424 3.424 0 0 1 1.003-2.458c.319-.32.685-.57 1.098-.75a3.36 3.36 0 0 1 1.346-.27c.413 0 .783.088 1.11.264.333.175.622.398.87.669l-.082-.743Zm-1.777 5.14c.305 0 .581-.08.828-.237.247-.158.442-.37.586-.635a1.87 1.87 0 0 0 .215-.891c0-.33-.072-.626-.215-.892a1.696 1.696 0 0 0-.586-.635 1.506 1.506 0 0 0-.828-.236c-.31 0-.59.079-.841.236a1.716 1.716 0 0 0-.6.642c-.147.266-.222.56-.222.885 0 .324.075.621.223.891.152.266.354.477.605.635.252.158.53.236.835.236Z"
    />
    <Path
      fill="url(#j)"
      d="m73.75 9.87-.006-6.754h1.858l.007.5c.224-.217.487-.386.787-.507.306-.122.626-.183.963-.183.247 0 .494.036.74.109l-.733 1.884a1.264 1.264 0 0 0-1.589.527c-.112.189-.168.403-.168.641V9.87H73.75Z"
    />
    <Path
      fill="url(#k)"
      d="M81.479 10.045c-.62 0-1.185-.16-1.697-.48a3.575 3.575 0 0 1-1.218-1.29 3.618 3.618 0 0 1-.451-1.79c0-.49.087-.95.262-1.377.175-.432.416-.81.72-1.135a3.38 3.38 0 0 1 1.078-.77 3.134 3.134 0 0 1 1.306-.277c.534 0 1.02.115 1.46.345.445.23.82.543 1.125.939.31.396.53.844.66 1.344.134.5.157 1.02.067 1.56h-4.672c.058.198.148.378.27.54.125.158.278.284.457.379.184.094.395.144.633.148.233.005.449-.05.646-.162.198-.113.366-.263.505-.452l1.898.439a3.606 3.606 0 0 1-1.225 1.472 3.118 3.118 0 0 1-1.824.567Zm-1.427-4.309h2.86a1.67 1.67 0 0 0-.296-.608 1.53 1.53 0 0 0-.504-.425 1.317 1.317 0 0 0-.633-.156c-.225 0-.436.052-.633.156a1.552 1.552 0 0 0-.498.425 1.742 1.742 0 0 0-.296.608Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={140.931}
        x2={121.25}
        y1={9.718}
        y2={58.34}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1C6DD" />
        <Stop offset={0.139} stopColor="#C1A4E8" />
        <Stop offset={0.239} stopColor="#B8E2FB" />
        <Stop offset={0.375} stopColor="#F2EFE8" />
        <Stop offset={0.478} stopColor="#F9DCDD" />
        <Stop offset={0.558} stopColor="#E1C1E5" />
        <Stop offset={0.624} stopColor="#BDAFE3" />
        <Stop offset={0.72} stopColor="#C7EDEB" />
        <Stop offset={0.83} stopColor="#E7F5EB" />
        <Stop offset={0.913} stopColor="#F2F0E7" />
        <Stop offset={1} stopColor="#DDC1E1" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default TownesquareGradient
