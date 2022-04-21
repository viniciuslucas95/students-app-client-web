import styled from 'styled-components'
import { Header } from '../components/Header'
import { Text } from '../components/styled-components/Text'

export function StudentsListPage() {
    return (
        <Container>
            <Header>Sistema de Alunos</Header>
            <Text weight='medium'>Alunos</Text>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`