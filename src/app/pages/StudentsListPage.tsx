import styled from 'styled-components'
import { Header } from '../components/Header'
import { StudentsTable } from '../components/StudentsTable'

export function StudentsListPage() {
    return (
        <Container>
            <Header>Sistema de Alunos</Header>
            <BodyContainer>
                <StudentsTable style={{ margin: '1rem auto' }} students={[{
                    age: 20,
                    name: 'Carlos Daniel Almeida Junior da Costa Pig Desu Madara No Didi Mocó'
                }, {
                    age: 50,
                    name: 'Joana'
                }, {
                    age: 31,
                    name: 'Pablo'
                }, {
                    age: 8,
                    name: 'Jorge'
                }]} />
            </BodyContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const BodyContainer = styled.div`
    margin: 2rem;
`