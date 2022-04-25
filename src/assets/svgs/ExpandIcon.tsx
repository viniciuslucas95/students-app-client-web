import { COLOR } from '../../app/constants/color.constant'
import { Svg, SvgSize } from './Svg'

interface IProps {
    size?: SvgSize
    direction?: 'up' | 'down' | 'left' | 'right'
    color?: string
}

export function ExpandIcon({ size, color, direction = 'up' }: IProps) {
    const rotationValue = direction === 'right' ? 90 : direction === 'down' ? 180 : direction === 'left' ? 270 : 0

    return <Svg rotation={rotationValue} size={size}>
        <path
            d="M24 17.85C23.8 17.85 23.6166 17.8833 23.45 17.95C23.2833 18.0167 23.1167 18.1333 22.95 18.3L13.05 28.2C12.7833 28.4667 12.6583 28.825 12.675 29.275C12.6917 29.725 12.8333 30.0833 13.1 30.35C13.4333 30.6833 13.7917 30.825 14.175 30.775C14.5583 30.725 14.9 30.5667 15.2 30.3L24 21.5L32.8 30.3C33.0666 30.5667 33.425 30.7167 33.875 30.75C34.325 30.7833 34.6833 30.6333 34.95 30.3C35.2833 30.0333 35.425 29.6833 35.375 29.25C35.325 28.8167 35.1666 28.45 34.9 28.15L25.05 18.3C24.8833 18.1333 24.7166 18.0167 24.55 17.95C24.3833 17.8833 24.2 17.85 24 17.85Z"
            fill={color ?? COLOR.highEmphasis} />
    </Svg>
}