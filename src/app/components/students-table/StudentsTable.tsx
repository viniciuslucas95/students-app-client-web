import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Column } from './Column'
import { Row } from './Row'

interface IResult {
    currentPage: number
    resultAmount: number
}

interface IStudent {
    name: string
    rg: number
    cpf: number
    age: number
    class: string
    address: string
}

interface IData {
    students: IStudent[]
    result: IResult
}

interface IProps {
    data?: IData
    style?: React.CSSProperties
}

export function StudentsTable({ data, style }: IProps) {
    if (!data) return <></>

    const { result, students } = data

    return <>
        <Container>
            <Column maxWidth='16rem'>
                <Row isTitle>Nome</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.name}</Row>
                    })}
                </>
            </Column>
            <Column maxWidth='12rem'>
                <Row isTitle>RG</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.rg.toString()}</Row>
                    })}
                </>
            </Column>
            <Column maxWidth='12rem'>
                <Row isTitle>CPF</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.cpf.toString()}</Row>
                    })}
                </>
            </Column>
            <Column>
                <Row isTitle>Idade</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.age.toString()}</Row>
                    })}
                </>
            </Column>
            <Column>
                <Row isTitle>Turma</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.class}</Row>
                    })}
                </>
            </Column>
            <Column maxWidth='20rem'>
                <Row isTitle>Endereço</Row>
                <>
                    {students.map((student, index) => {
                        return <Row isVariant={index % 2 === 1 ? true : false} key={index}>{student.address}</Row>
                    })}
                </>
            </Column>
        </Container>
        <PagesRow>

        </PagesRow>
    </>
}

const Container = styled.div`
    white-space: nowrap;
    overflow: auto;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${COLOR.primaryVariant};
`

const PagesRow = styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLOR.neutral};
    padding: 0 32px;
    height: 48px;
    border-radius: 0 0 4px 4px;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: ${COLOR.primaryVariant};
`