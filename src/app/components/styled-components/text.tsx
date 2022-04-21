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
    children: string
}

export const Text = styled.span<PropsWithChildren<IProps>>`
    font-size: ${({ size }) => size === 'big' ? FONT.big : size === 'small' ? FONT.small : FONT.normal};
    font-family: 'Roboto', sans-serif;
    color: ${({ color }) => color === 'secondary' ? COLOR.secondary : COLOR.primary};
    font-weight: ${({ weight }) => weight === 'medium' ? 500 : 400};
`