//@ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';
const ProfileSvg = (props: SvgProps) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Circle cx={12} cy={12} r={12} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_2732_9995" transform="scale(.00195)" />
      </Pattern>
      <Image
        id="image0_2732_9995"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QA/wD/AP+gvaeTAAAN8UlEQVR4nO3dMYik53nA8W/jw21SCGIQwZFFlMLGGHJnIpBsLlxjhAIGg4p0uhSRusXKKSYB22mSPVlcKp2bE6QUNoRYCDVCAt+BjPcCJsiFdGjPIQgUEDhpA+ZSXKHGzTO5b2Z2/79f/ezMOzu78Ocr3ufg5Ojw3gIApPzOrg8AAGyfAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAoHO7PgCcVu/97Npo/kt/eriX73Harf078h1wVnkCAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAATZBQAbWvtO+W3Yt3v0N3mPKXf7w32eAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBBydHh/d2fQg4jaZ3yl/48mfG7/G5J/5kNP/6Kz8fzU/PdPzvv1n19Td5j6ef/+po/uNb/zaan57H7gBOC08AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKBzuz4AnFbTO9+Ph7sDlmVZnn5iNj+9e3+6a+DCMrtHf/r6m7zHlLv94T5PAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICgg5Ojw3u7PgScRu8N7/Z/+vmvjt/j47vDe/E/Gr/FyPRu/49vrXuv/7Isy/LwbPxzj8w+w+uv/Hw0b3cAp4UnAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAoHO7PgDb8YUXZ4trik6OZktcpktfXn9l/h1c+PJnRvN7uaxnaO3P8PqblvvAsngCAABJAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQdnBwd3tv1IZhb+27/L/zh+VVffxtOfnV71df/yTdn8xe+MbvXf1mWZfloOP/wuq+/lV0DK3+G6esfv/mb0bzdAZwWngAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQed2fQA2s/Zd/R/ePV719bfh4OBg1def3vl+/OZ8f8N4f8D0Xvyhj+9ucLf/lLv9YSs8AQCAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCDk6ODu/t+hAsy6XrN0fzr716dTT/lfN/M5q/9vI3RvNXvv/90fzV7353NL/Je+ybk6P5nfLv/Wy+P2Di2i9/dzR/+anHR/M33nh3NL8sy3L4xf8Z/8yEu/3hPk8AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKBzuz7AWTS9139Z1r/b/xe3/3E0/8N/vjKan97t/9ff+95oflnmuwCee/750fzDD/3BaP7v/v47o/lNTO+tn/7tff6zd0bz2+CuftgOTwAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEGWAZ1S0+U+a7v49a+P5m+/885KJ/nUdLnPR5/850onuW+TJVFT1156cTT/T3/7lyudZHNr/57eeu7JVV8fTgtPAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICgg5Ojw3u7PsRZs40731979epo/plnr6x0ku05+dXtXR/h/+Vff/Sj1d/jz7/1rdH8n/3x743mLz/1+Gj+xhvvjuaXZVnefv+/xz8z8egjF1Z9fbsGOC08AQCAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCzu36AGxmerf/vt1Pvsm+hOO3317hJJ+a/k6vvfTiaH56Tz/r+PDu8aqvv8mugX37/6TBEwAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgyC6AFWxyr/cmd+PXnL94cTR/+513VjrJZn7y4x+v/h72DezeJrsGpvsD7A7gQfAEAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAiyC2BPTO/23rfdAdPzbHJf+vRu/2eevTKav/bSi6P54r3779+5s+sjAA+IJwAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgKCDk6PDe7s+BPtn7eU+08U+y2K5zxqm38OVv/rmaP6Jxx4azS/Lstz64JPR/NUf/sv4PSbOX7y46utv4tFHLozmp8vGaPAEAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAg6t+sDcDZM75Sf3uu/iX2723+T/Qdr30M//x7+aDT9xPLr4esvy3/87+w9pp/htVevjuY3+d6m9nHfAGefJwAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkF0AEZeu3xzNf3j3eDS/jfvS981Z+MzT73nq0UcujH9mH880Md01sCzzv6Xpe1wa7kt467knR/OcTp4AAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEF2AfBAPLOFu8an+wz2zfR3tCyb3Ss/cf7ixVVff+17/Tex9p6LTb7nqbX/LmjwBAAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIsgvglJrei79vd7Jvcq//2p9heuf7PpreQ1+8U37t39FXvvj7o/lNrP0ZLm1htwe75wkAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEGQXAA/E9K7x6V3mm1j7bv9tfIbi3f5rf+a1/1Y3+Q7+4eWXR/Pb2DfA2ecJAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAg6ODk6PDerg/B+i5dvzma//Du8Wh+7cU72zBd+vLWc0+udJJPTb+3fVsGtI2FSVNr/442+czTM02XB0394pf/NZrfxv8CD54nAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQuV0fgP3kbv/9MD3TCyvfEb8Nf/GlX4/mb33wyWh++nexb/sVlmVZvvPtb4/m93EnA7vnCQAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQZBdAxPRO+Utn4O7wfbzbf9/84GuPjeZf+OkHo/nPf/bOaP6+hzb4mfVsY6fE2v9v4///6zdXOgn7xBMAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIMguAH4r9+jz20x3B1y+c2ulk2yP/wXOKk8AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCC7AIDV3Lj87PhnLt94dTb/1OOj+RtvvDuaX5b1dwFM9w1cun5zpZPcZ/9BgycAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgy4AAThnLengQPAEAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAguwCgLAXfvrBaP4HX3tspZNs7v07d3Z9BDiVPAEAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAgv4PL2LIWj12mpQAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default ProfileSvg;
