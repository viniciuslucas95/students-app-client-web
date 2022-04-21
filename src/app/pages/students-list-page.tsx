import styled from 'styled-components'
import { Header } from '../components/header'

export function StudentsListPage() {
    return (
        <Container>
            <Header>Sistema de Alunos</Header>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`