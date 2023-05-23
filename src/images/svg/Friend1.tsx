import * as React from "react"
import Svg, {
  SvgProps,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const Friend1 = (props: SvgProps) => (
  <Svg
   
    width={44}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#a)" rx={20} />
    <G strokeLinecap="round" strokeLinejoin="round" clipPath="url(#b)">
      <Path
        fill="url(#c)"
        stroke="#FEDF89"
        strokeWidth={1.125}
        d="M34.047 23.018a1.221 1.221 0 0 1 1.906 0l1.133 1.41a1.223 1.223 0 0 0 1.085.45l1.8-.195a1.224 1.224 0 0 1 1.35 1.35l-.196 1.8a1.223 1.223 0 0 0 .45 1.084l1.411 1.134a1.222 1.222 0 0 1 0 1.905l-1.415 1.129a1.223 1.223 0 0 0-.45 1.085l.195 1.8a1.22 1.22 0 0 1-1.35 1.35l-1.8-.196a1.221 1.221 0 0 0-1.084.45l-1.13 1.406a1.22 1.22 0 0 1-1.904 0l-1.134-1.41a1.224 1.224 0 0 0-1.085-.45l-1.8.196a1.221 1.221 0 0 1-1.35-1.35l.196-1.8a1.223 1.223 0 0 0-.45-1.085l-1.41-1.134a1.222 1.222 0 0 1 0-1.905l1.41-1.134a1.22 1.22 0 0 0 .45-1.084l-.196-1.8a1.222 1.222 0 0 1 1.35-1.35l1.8.195a1.225 1.225 0 0 0 1.085-.45l1.133-1.401Z"
      />
      <Path
        stroke="#fff"
        d="m38.307 32.627.44-3.317a.25.25 0 0 0-.36-.26l-1.427 1.087a.252.252 0 0 1-.288.02.251.251 0 0 1-.075-.07l-1.41-2.06a.243.243 0 0 0-.373 0l-1.41 2.06a.25.25 0 0 1-.364.05l-1.426-1.087a.25.25 0 0 0-.36.26l.44 3.333"
      />
      <Path
        stroke="#fff"
        d="M38 32.56h-6a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={35}
        x2={35}
        y1={22.561}
        y2={39.437}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEC84B" />
        <Stop offset={1} stopColor="#F79009" />
      </LinearGradient>
      <ClipPath id="b">
        <Path fill="#fff" d="M26 22h18v18H26z" />
      </ClipPath>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#d" transform="scale(.00195)" />
      </Pattern>
      <Image
        xlinkHref={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAUVBMVEX////78jbLvr63sLqxq6vunxljm/9gpDGKf3/ZV2NOftSpcxhVjy04duVNgimHTGI4Y7FEeSCsMjL/ABu+GyxSS0spSIKXEyFOIhoiIDQAAACkIPW0AAAFr0lEQVR42u3dXU8TQRiG4VIBA5oQ4wHx//84RKMGE4HwIZ4+NXmTd1halu11HTbbdtvemYOZzu76jL22XrHXBCAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAhgyEmDABAAAkAACAABIAAEgAAQAAJAAG9KOc9/E74GASAABIAAEAACQAAIAAEgAATA3gZwH24KB4WNg+4L+YTtfIQ8CwEgAASAABAAAkAACAABIAAEgAD+cxSqC+w8heOwcdBRIZ/sFzUCIAAEgAAQAAJAAAgAASAABMBsAjgMObX/K1yn2/B6p/0u5EpFPi4ABIAAEAACQAAIAAEgAASAABAA+xnAOkx6ocew249wFTqPCwABIAAEgAAQAAJAAAgAASAAFh/A1vdz7HZd4Cx0HhcAAkAACAABIAAEgAAQAAJAACwlgOq+0Dd5A4iHkBeJyissHVfeh3Vh+99YrjzkxyxXJOa9YcAIYARAAAgAASAABIAAEAACQAAIoK26L/TJx/AnfAs5X55/sM8J9sffhQ9ht99enupVZd4bBowARgAEgAAQAAJAAAgAASAABIAAnuU0XYancBA+hZ8hry90+2L//z9tGH7Rs4oRAAEgAASAABAAAkAACAABIAAEwN4EkAtA1TF3obwAVGdhqFzo+d7QeiUBIAAEgAAQAAJAAAgAASAABIAAVqvVeRh9vFS9WWvK/6Fh41UvCgtYIzACGAEQAAJAAAgAASAABIAAEAACeFk5nX/dsPHkvNpU9QatKf8X+zitNQIBIAAEgAAQAAJAAAgAASAABMACA6jn86f4GzrHH1a2/q2WCwNGAASAABAAAkAACAABIAAEgABYYgCj6wI5d74xqZ73CMgNBqOX/3nwsxsBEAACQAACQAAIAAEgAASAABAAAtiKamGoWgBajy4AjX8BhdZBnVtYr+a9ScQIYARAAAgAASAABIAAEAACQAAI4BVOqZj+37hhdGf+vzVV37o7deeg8UUCASAABIAAEAACQAAIAAEgAATAwgOo9gJM+zyjk/DV/Z8PUnVQayEhTynvfz2PPQJGACMAAkAACAABIAAEgAAQAAJAALuXk+qT7kK9MT0/+q/9i87yRB6T0/znrUUCASAABIAAEAACQAAIAAEgAATAAgMY3Qtw2nnC8F6AzhpBy5eQb1DetjrfeR57BIwARgAEgAAQAAJAAAgAASAABIAAdi/nyOvzLub/W5f8b71D51WrvQA/Uj5h0m2OjQAIAAEgAASAABAAAkAACAABIADmHkBe86naVZFyteWyswB0XRk90/LaTqMLQ+fVwtDnYARAAAgAASAABIAAEAACQAAIgKUHMOk6T60p/zzoc8NTqhYYhu8FkesCh8EIgAAQAAJAAAgAASAABIAAEABLDKCaVG+Z8pf/DXdh0guVuxO2/hGMAAgAASAABIAAEAACQAAIAAHwBgK4HrWVs5i0LjCPqX0jAAJAAAgAASAABIAAEAACQAAI4DmOQz4+fHWiKccIAAEgAASAABAAAkAACAABIAAEgAC2I3eMVAtDLfPbPSIAIwACQAAIAAEgAASAABAAAkAASzdpan/SkwWAABAAAkAACAABIAAEgAAQADvxD7V+5OGW6v+4AAAAAElFTkSuQmCC" as any}
        id="d"
        width={512}
        height={512}
      />
    </Defs>
  </Svg>
)
export default Friend1