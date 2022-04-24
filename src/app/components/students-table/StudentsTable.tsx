import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Button } from '../Button'
import { Subtitle2 } from '../Texts'
import { Column } from './Column'
import { Row } from './Row'
import { Button as ButtonText } from '../Texts'

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
            <Subtitle2 style={{ color: COLOR.highEmphasis }}>{result.resultAmount} resultados</Subtitle2>
            <PageButtons>
                <Button style={{ margin: '0 1px 0 0' }} buttonType='just-text-disabled' text={{
                    text: 'Anterior',
                    isJustText: true
                }} />
                <Button style={{ margin: '0 1px' }} buttonType='just-text-disabled' isMinimumSize text={{
                    text: '1',
                    isJustText: true
                }} />
                <PageTextContainer style={{ margin: '0 1px' }}>
                    <ButtonText style={{ color: COLOR.disabled }}>...</ButtonText>
                </PageTextContainer>
                <Button style={{ margin: '0 1px' }} buttonType='just-text-disabled' isMinimumSize text={{
                    text: '6',
                    isJustText: true
                }} />
                <PageTextContainer hasBorder style={{ margin: '0 1px' }}>
                    <ButtonText style={{ color: COLOR.primaryVariant }}>7</ButtonText>
                </PageTextContainer>
                <Button style={{ margin: '0 1px' }} buttonType='just-text-disabled' isMinimumSize text={{
                    text: '8',
                    isJustText: true
                }} />
                <PageTextContainer style={{ margin: '0 1px' }}>
                    <ButtonText style={{ color: COLOR.disabled }}>...</ButtonText>
                </PageTextContainer>
                <Button style={{ margin: '0 1px' }} buttonType='just-text-disabled' isMinimumSize text={{
                    text: '14',
                    isJustText: true
                }} />
                <Button style={{ margin: '0 0 0 1px' }} buttonType='just-text-disabled' text={{
                    text: 'Próximo',
                    isJustText: true
                }} />
            </PageButtons>
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
    position: relative;
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

const PageButtons = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
`

interface IPageTextContainer {
    hasBorder?: boolean
}

const PageTextContainer = styled.div<IPageTextContainer>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px; // 2 more px because of the outline
    height: 38px; // 2 more px because of the outline
    border: 2px solid ${({ hasBorder }) => hasBorder ? COLOR.primaryVariant : COLOR.neutral};
    border-radius: 4px;
`