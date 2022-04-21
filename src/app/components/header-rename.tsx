import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Text } from './styled-components/text-rename'

interface IProps {
    children: string
}

export function Header({ children }: PropsWithChildren<IProps>) {
    return <StyledHeader>
        <Text color='secondary'>{children}</Text>
    </StyledHeader>
}

const StyledHeader = styled.div`
    background-color: ${COLOR.primary};
    padding: 0.5rem 1rem;
    
`