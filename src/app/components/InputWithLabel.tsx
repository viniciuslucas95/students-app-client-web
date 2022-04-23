import React from 'react'
import styled from 'styled-components'
import { StyledInput } from "./styled-components/StyledInput"
import { StyledText } from './styled-components/StyledText'

type Width = 'small' | 'medium' | 'big'

interface IProps {
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    label: string
    placeholder?: string
    width?: Width
    style?: React.CSSProperties
}

export function InputWithLabel({ onChange, value, placeholder, label, width, style }: IProps) {
    return <Container style={style} width={width ?? 'medium'}>
        <StyledText style={{ margin: '0rem 0rem 0.25rem 0.25rem' }} size='small' weight='medium'>{label}</StyledText>
        <StyledInput placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)} />
    </Container>
}

interface IStyledProps {
    width: Width
}

const Container = styled.div<IStyledProps>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width === 'big' ? '12rem' : width === 'small' ? '4rem' : '8rem'};
`