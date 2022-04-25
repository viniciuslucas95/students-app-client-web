import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Button } from '../Button'
import { Subtitle2 } from '../Texts'
import { Column } from './Column'
import { Row } from './Row'
import { Button as PageNumberText } from '../Texts'
import { useDimensions } from '../../hooks/useDimensions'
import { ExpandIcon } from '../../../assets/svgs/ExpandIcon'
import { PageNumberIconButton, PageNumberTextButton } from './PageNumberButtons'

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
    const { width } = useDimensions()

    if (!data) return <></>

    const { result, students } = data
    const { currentPage, resultAmount } = result
    const totalPages = Math.ceil(resultAmount / 10)

    return <Container>
        <ListContainer>
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
        </ListContainer>
        <PagesRow>
            {
                width > 575 ?
                    <Subtitle2 style={{ color: COLOR.highEmphasis }}>{result.resultAmount} resultados</Subtitle2>
                    : null
            }
            <PageButtons>
                {
                    result.currentPage > 1 ?
                        <>
                            {
                                width <= 768 ?
                                    <PageNumberIconButton>
                                        <ExpandIcon direction='left' color={COLOR.disabled} size='medium' />
                                    </PageNumberIconButton>
                                    : <PageNumberTextButton forceMinWidth={false}>Anterior</PageNumberTextButton>
                            }
                            <PageNumberTextButton>1</PageNumberTextButton>
                        </>
                        : null
                }
                {
                    currentPage > 3 ?
                        <PageTextContainer style={{ width: '24px' }}>
                            <PageNumberText style={{ color: COLOR.disabled }}>...</PageNumberText>
                        </PageTextContainer>
                        : null}
                {
                    currentPage - 1 > 0 && currentPage - 1 !== 1 ?
                        <PageNumberTextButton>{currentPage - 1}</PageNumberTextButton>
                        : null
                }
                <PageTextContainer hasBorder style={{ margin: '0 1px' }}>
                    <PageNumberText style={{ color: COLOR.primaryVariant }}>{currentPage.toString()}</PageNumberText>
                </PageTextContainer>
                {
                    currentPage + 1 < totalPages && currentPage + 1 !== totalPages ?
                        <PageNumberTextButton>{currentPage + 1}</PageNumberTextButton>
                        : null
                }
                {
                    currentPage < totalPages - 2 ?
                        <PageTextContainer style={{ width: '24px' }}>
                            <PageNumberText style={{ color: COLOR.disabled }}>...</PageNumberText>
                        </PageTextContainer>
                        : null
                }
                {
                    currentPage < totalPages ?
                        <>
                            <PageNumberTextButton>{totalPages}</PageNumberTextButton>
                            {
                                width <= 768 ?
                                    <PageNumberIconButton>
                                        <ExpandIcon direction='right' color={COLOR.disabled} size='medium' />
                                    </PageNumberIconButton>
                                    : <PageNumberTextButton forceMinWidth={false}>Próximo</PageNumberTextButton>
                            }
                        </>
                        : null
                }
            </PageButtons>
        </PagesRow>
    </Container>
}

const Container = styled.div`
    width: fit-content;
    max-width: 100%;
    padding: 32px;
    margin: auto;

    @media screen and (max-width: 650px){
        padding: 0;
    }
`

const ListContainer = styled.div`
    white-space: nowrap;
    overflow: auto;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${COLOR.primaryVariant};

    @media screen and (max-width: 650px){
        border: 0;
        border-radius: 0;
    }
`

const PagesRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${COLOR.neutral};
    padding: 0 32px;
    height: 48px;
    border-radius: 0 0 4px 4px;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: ${COLOR.primaryVariant};

    @media screen and (max-width: 650px){
        border-width: 0 0 1px 0;
        border-radius: 0;
    }
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