import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { FONT } from '../../constants/size.constant'

type Size = 'big' | 'medium' | 'small'
type Weight = 'regular' | 'medium' | 'bold'
type Color = 'primary' | 'secondary'
type Transform = 'uppercase' | 'lowercase' | 'none'

interface IProps {
    size?: Size
    color?: Color
    weight?: Weight
    transform?: Transform
    children: string
}

export const StyledText = styled.span<PropsWithChildren<IProps>>`
    font-size: ${({ size }) => size === 'big' ? FONT.big : size === 'small' ? FONT.small : FONT.normal};
    font-family: 'Roboto', sans-serif;
    text-transform: ${({ transform }) => transform ?? 'none'};
    color: ${({ color }) => color === 'secondary' ? COLOR.secondary : COLOR.primary};
    font-weight: ${({ weight }) => weight === 'medium' ? 500 : weight === 'bold' ? 700 : 400};
`