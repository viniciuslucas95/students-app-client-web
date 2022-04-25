import { PropsWithChildren } from "react";

export type SvgSize = 'big' | 'medium' | 'small'

interface IProps {
    children: React.SVGProps<SVGPathElement>
    size?: SvgSize
    rotation?: number
}

export function Svg({ children, rotation = 0, size = 'small' }: PropsWithChildren<IProps>) {
    const sizeValue = size === 'big' ? 48 : size === 'medium' ? 36 : 24

    return <svg style={{ transform: `rotate(${rotation}deg)` }} width={sizeValue} height={sizeValue} viewBox='0 0 48 48' fill="none" xmlns="http://www.w3.org/2000/svg" >
        {children}
    </svg>
}