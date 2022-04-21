import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { StyledButton } from './styled-components/StyledButton'
import { StyledText } from './styled-components/StyledText'

interface IStudent {
    name: string
    age: number
}

interface IProps {
    students: IStudent[]
    style?: React.CSSProperties
}

export function StudentsTable({ students, style }: IProps) {
    return <Container>
        <TitleContainer>
            <StyledText transform='uppercase' weight='bold' color='primary'>Alunos</StyledText>
            <StyledButton style={{ gridColumn: '4', justifySelf: 'center' }}>Criar</StyledButton>
        </TitleContainer>
        <TableContainer style={style}>
            <Row>
                <Name weight='bold'>Nome</Name>
                <CenteredContainer>
                    <CenteredText weight='bold'>Idade</CenteredText>
                </CenteredContainer>
            </Row>

            {students.map((student, index) => {
                const { name, age } = student

                return <Row key={index}>
                    <Name style={index >= students.length - 1 ? { borderBottomWidth: '0' } : {}}>{name}</Name>
                    <CenteredContainer style={index >= students.length - 1 ? { borderBottomWidth: '0' } : {}}>
                        <CenteredText>{age.toString()}</CenteredText>
                    </CenteredContainer>
                </Row>
            })}
        </TableContainer>
    </Container>
}

const Container = styled.div`
    width: fit-content;
    max-width: 100%;
    margin: auto;
`

const TableContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: fit-content;
    max-width: 100%;
    border-width: 1px;
    border-color: ${COLOR.neutralBorder};
    border-style: solid;
    border-radius: 0.25rem;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
`

const Name = styled(StyledText)`
    display: inline-block;
    padding: 0.75rem 2rem;
    width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
    border-width: 0 0 1px 0;
    border-color: ${COLOR.neutralBorder};
    border-style: solid;
`

const CenteredContainer = styled.div`
    display: inline-block;
    width: 4rem;
    padding: 0.75rem 2rem 0.75rem 0;
    border-width: 0 0 1px 0;
    border-color: ${COLOR.neutralBorder};
    border-style: solid;
`

const CenteredText = styled(StyledText)`
    display: inline-block;
    text-align: center;
    width: 100%;
`

const Row = styled.div`
    white-space: nowrap;
`