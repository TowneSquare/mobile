import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CommunitySetting(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_2989_8867)" fill="#CACACA">
                <Path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5.625 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.375 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </G>
            <Defs>
                <ClipPath id="clip0_2989_8867">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default CommunitySetting
