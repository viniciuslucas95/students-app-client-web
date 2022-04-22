import styled from 'styled-components'
import { Header } from '../components/Header'
import { StudentsTable } from '../components/StudentsTable'

export function StudentsListPage() {
    return (
        <Body>
            <Header>Sistema de Alunos</Header>
            <Main>
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
            </Main>
        </Body>
    )
}

const Body = styled.body`
    width: 100%;
`

const Main = styled.main`
    margin: 2rem;
`