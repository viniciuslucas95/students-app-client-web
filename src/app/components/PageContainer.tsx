import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Header } from './Header'

interface IProps {
    headerTitle: string
    children: JSX.Element | JSX.Element[]
}

export function PageContainer({ children, headerTitle }: PropsWithChildren<IProps>) {
    return <>
        <Header>{headerTitle}</Header>
        <Main>
            {children}
        </Main>
    </>
}

const Main = styled.main`
    margin: 2rem;
`