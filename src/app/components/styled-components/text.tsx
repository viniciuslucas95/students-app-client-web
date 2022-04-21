import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { FONT } from '../../constants/size.constant'

type Size = 'big' | 'medium' | 'small'
type Weight = 'regular' | 'medium'
type Color = 'primary' | 'secondary'

interface IProps {
    size?: Size
    color?: Color
    weight?: Weight
}

interface IComponentProps extends IProps {
    children: string
}

export function Text({ children, size, color, weight }: PropsWithChildren<IComponentProps>) {
    return <StyledText weight={weight ?? 'regular'} size={size ?? 'medium'} color={color ?? 'primary'}>{children}</StyledText>
}

const StyledText = styled.span<Required<IProps>>`
    font-size: ${({ size }) => size === 'big' ? FONT.big : size === 'small' ? FONT.small : FONT.normal};
    font-family: 'Roboto', sans-serif;
    color: ${({ color }) => color === 'secondary' ? COLOR.secondary : COLOR.primary};
    font-weight: ${({ weight }) => weight === 'medium' ? 500 : 400};
`