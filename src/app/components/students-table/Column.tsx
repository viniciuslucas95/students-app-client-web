import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface IProps {
    children: JSX.Element | JSX.Element[]
    maxWidth?: string
}

export function Column({ children, maxWidth }: PropsWithChildren<IProps>) {
    return <StyledColumn maxWidth={maxWidth ?? '8rem'}>
        {children}
    </StyledColumn>
}

const StyledColumn = styled.div<Required<Omit<IProps, 'children'>>>`
    display: inline-block;
    width: fit-content;
    min-width: 8rem;
    max-width: ${({ maxWidth }) => maxWidth};
`