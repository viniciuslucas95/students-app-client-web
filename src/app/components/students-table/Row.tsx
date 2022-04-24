import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Body1, Body2, Headline6 } from '../Texts'

interface ICommonProps {
    isVariant?: boolean
    isTitle?: boolean
}

interface IProps extends ICommonProps {
    children: string
}

export function Row({ children, isTitle, isVariant }: PropsWithChildren<IProps>) {
    return <StyledRow isTitle={isTitle ?? false} isVariant={isVariant ?? false}>
        {isTitle ? <Title >{children}</Title> : <Normal >{children}</Normal>}
    </StyledRow>
}

const StyledRow = styled.div<Required<ICommonProps>>`
    display: flex;
    align-items: center;
    background-color: ${({ isTitle, isVariant }) => isTitle ? COLOR.primaryVariant : isVariant ? COLOR.textFieldContainer : COLOR.neutral};
    color: ${({ isTitle }) => isTitle ? COLOR.neutral : COLOR.mediumEmphasis};
    padding: 0 32px;
    height: 48px;
`

const Title = styled(Body1)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Normal = styled(Body2)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`