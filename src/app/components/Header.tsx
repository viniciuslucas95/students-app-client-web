import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { StyledText } from './styled-components/StyledText'

interface IProps {
    children: string
}

export function Header({ children }: PropsWithChildren<IProps>) {
    return <StyledHeader>
        <StyledText size='medium' weight='bold' transform='uppercase' color='secondary'>{children}</StyledText>
    </StyledHeader>
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.primary};
    padding: 0.5rem 1rem;
    min-height: 3.25rem;
    
`