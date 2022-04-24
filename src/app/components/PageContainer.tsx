import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Header } from './Header'

interface IHeader {
    title: string
    button?: JSX.Element
}

interface IProps {
    header: IHeader
    children: JSX.Element | JSX.Element[]
}

export function PageContainer({ children, header: { title, button } }: PropsWithChildren<IProps>) {
    return <>
        <Header button={button}>{title}</Header>
        <Main>
            {children}
        </Main>
    </>
}

const Main = styled.main`
    padding: 32px;
`