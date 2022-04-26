import { PropsWithChildren } from 'react'
import { Header } from './Header'

interface IProps {
    headerTitle: string
    children: JSX.Element | JSX.Element[]
}

export function PageContainer({ children, headerTitle }: PropsWithChildren<IProps>) {
    return <>
        <Header>{headerTitle}</Header>
        <main>
            {children}
        </main>
    </>
}