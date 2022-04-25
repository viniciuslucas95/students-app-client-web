import { COLOR } from "../../app/constants/color.constant"
import { Svg, SvgSize } from "./Svg"

interface IProps {
    size?: SvgSize
    color?: string
}

export function PlusIcon({ size, color }: IProps) {
    return <Svg size={size}>
        <path
            d="M23 6C22.4477 6 22 6.44772 22 7V22H7C6.44772 22 6 22.4477 6 23L6 25C6 25.5523 6.44772 26 7 26H22V41C22 41.5523 22.4477 42 23 42H25C25.5523 42 26 41.5523 26 41V26H41C41.5523 26 42 25.5523 42 25V23C42 22.4477 41.5523 22 41 22H26V7C26 6.44772 25.5523 6 25 6H23Z"
            fill={color ?? COLOR.highEmphasis} />
    </Svg>
}