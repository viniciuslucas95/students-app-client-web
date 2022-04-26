import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'
import { Subtitle2 } from '../Texts'
import { Column } from './Column'
import { Row } from './Row'
import { Button as PageNumberText } from '../Texts'
import { useDimensions } from '../../hooks/useDimensions'
import { ExpandIcon } from '../../../assets/svgs/ExpandIcon'
import { PageNumberIconButton, PageNumberTextButton } from './PageNumberButtons'
import { Student, StudentsResult } from '../../dto/students.dto'
import { DataFormatter } from './helpers/data-formatter.helper'
import { RgFormatter } from './helpers/rg-formatter.helper'
import { CpfFormatter } from './helpers/cpf-formatter.helper'
import { DateFormatter } from './helpers/date-formatter.helper'

interface IProps {
    studentsResult: StudentsResult
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    style?: React.CSSProperties
}

export const MAX_STUDENTS_ON_PAGE = 10

export function StudentsTable({ studentsResult, style, currentPage, setCurrentPage }: IProps) {
    const { width } = useDimensions()
    const { results, students } = studentsResult
    const totalPages = Math.ceil(results / MAX_STUDENTS_ON_PAGE)

    function getRows(key: keyof Student, formatter?: DataFormatter) {
        const rows = []

        for (let i = 0; i < MAX_STUDENTS_ON_PAGE; i++) {
            const index = i + (currentPage - 1) * MAX_STUDENTS_ON_PAGE
            const student = students[index]

            if (!student) {
                rows.push(<Row key={index}> </Row>)
                continue
            }

            const value = student[key]

            rows.push(<Row isVariant={index % 2 === 1 ? true : false} key={index}>{formatter ? formatter.format(value) : value.toString()}</Row>)
        }

        return <>
            {rows}
        </>
    }

    return <Container style={style}>
        <ListContainer>
            <Column width='16rem'>
                <Row isTitle>Nome</Row>
                {getRows('name')}
            </Column>
            <Column width='12rem'>
                <Row isTitle>RG</Row>
                {getRows('rg', new RgFormatter())}
            </Column>
            <Column width='12rem'>
                <Row isTitle>CPF</Row>
                {getRows('cpf', new CpfFormatter())}
            </Column>
            <Column>
                <Row isTitle>Turma</Row>
                {getRows('class')}
            </Column>
            <Column width='14rem'>
                <Row isTitle>Data de Nascimento</Row>
                {getRows('birthdate', new DateFormatter())}
            </Column>
            <Column width='20rem'>
                <Row isTitle>Endereço</Row>
                {getRows('address')}
            </Column>
        </ListContainer>
        <PagesRow>
            {
                width > 575 ?
                    results > 0 ?
                        <Subtitle2 style={{ color: COLOR.highEmphasis }}>{results} resultados</Subtitle2>
                        : <Subtitle2 style={{ color: COLOR.highEmphasis }}>Sem resultados</Subtitle2>
                    : null
            }
            <PageButtons>
                {
                    currentPage > 1 ?
                        <>
                            {
                                width <= 768 ?
                                    <PageNumberIconButton onClick={() => setCurrentPage(currentPage - 1)}>
                                        <ExpandIcon direction='left' color={COLOR.disabled} size='medium' />
                                    </PageNumberIconButton>
                                    : <PageNumberTextButton onClick={() => setCurrentPage(currentPage - 1)} forceMinWidth={false}>Anterior</PageNumberTextButton>
                            }
                            <PageNumberTextButton onClick={() => setCurrentPage(1)}>1</PageNumberTextButton>
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
                        <PageNumberTextButton onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</PageNumberTextButton>
                        : null
                }
                <PageTextContainer hasBorder style={{ margin: '0 1px' }}>
                    <PageNumberText style={{ color: COLOR.primaryVariant }}>{currentPage.toString()}</PageNumberText>
                </PageTextContainer>
                {
                    currentPage + 1 < totalPages && currentPage + 1 !== totalPages ?
                        <PageNumberTextButton onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</PageNumberTextButton>
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
                            <PageNumberTextButton onClick={() => setCurrentPage(totalPages)}>{totalPages}</PageNumberTextButton>
                            {
                                width <= 768 ?
                                    <PageNumberIconButton onClick={() => setCurrentPage(currentPage + 1)}>
                                        <ExpandIcon direction='right' color={COLOR.disabled} size='medium' />
                                    </PageNumberIconButton>
                                    : <PageNumberTextButton onClick={() => setCurrentPage(currentPage + 1)} forceMinWidth={false}>Próximo</PageNumberTextButton>
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