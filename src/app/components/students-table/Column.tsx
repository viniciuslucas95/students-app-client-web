import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface IProps {
    children: JSX.Element | JSX.Element[]
    width?: string
}

export function Column({ children, width }: PropsWithChildren<IProps>) {
    return <StyledColumn width={width ?? '8rem'}>
        {children}
    </StyledColumn>
}

const StyledColumn = styled.div<Required<Omit<IProps, 'children'>>>`
    display: inline-block;
    width: ${({ width }) => width};
`