import styled from 'styled-components'
import { Header } from '../components/Header'
import { StudentsTable } from '../components/StudentsTable'

export function StudentsListPage() {
    return (
        <Container>
            <Header>Sistema de Alunos</Header>
            <BodyContainer>
                <StudentsTable data={{
                    students: [{
                        age: 20,
                        name: 'Carlos Daniel'
                    }, {
                        age: 50,
                        name: 'Joana'
                    }, {
                        age: 31,
                        name: 'Pedro'
                    }, {
                        age: 3,
                        name: 'Ana'
                    }, {
                        age: 99,
                        name: 'Marcos'
                    }, {
                        age: 17,
                        name: 'Fabrício'
                    }, {
                        age: 45,
                        name: 'Juliana'
                    }, {
                        age: 64,
                        name: 'Fátima'
                    }, {
                        age: 31,
                        name: 'Pablo'
                    }, {
                        age: 8,
                        name: 'Jorge'
                    }], result: {
                        currentPage: 7,
                        resultAmount: 140
                    }
                }} />
            </BodyContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const BodyContainer = styled.div`
    margin: 2rem;
`