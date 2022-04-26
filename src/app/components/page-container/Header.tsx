import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Headline6 } from '../Texts'

interface IProps {
    children: string
}

export function Header({ children }: PropsWithChildren<IProps>) {
    return <StyledHeader>
        <Headline6 style={{ color: COLOR.highEmphasis }}>{children}</Headline6>
    </StyledHeader>
}

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLOR.neutral};
    height: 56px;
    padding: 0 32px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 20%);
`