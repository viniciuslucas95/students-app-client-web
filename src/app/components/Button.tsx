import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'
import { Button as ButtonText } from './Texts'

type ButtonType = 'primary' | 'secondary' | 'just-text' | 'just-text-disabled'

interface IText {
    text: string
    isJustText?: boolean
}

interface IProps {
    text?: IText
    icon?: JSX.Element
    style?: React.CSSProperties
    isMinimumSize?: boolean
    buttonType?: ButtonType
}

export function Button({ text, icon, style, isMinimumSize, buttonType }: IProps) {
    return <StyledButton buttonType={buttonType ?? 'primary'} isMinimumSize={isMinimumSize ?? false}
        style={style}
        hasIcon={icon ? true : false}
        hasText={text ? true : false}>
        {icon ? <IconContainer hasText={text ? true : false}>
            {icon}
        </IconContainer> : null}
        {text ? <ButtonText>{text.text}</ButtonText> : null}
    </StyledButton>
}

interface IStyledText {
    hasText: boolean
}

interface IStyledButtonProps extends IStyledText {
    hasIcon: boolean
    isMinimumSize: boolean
    buttonType: ButtonType
}

const StyledButton = styled.button<IStyledButtonProps>`
    display: flex;
    height: 36px;
    width: ${({ hasText, isMinimumSize }) => hasText && !isMinimumSize ? 'auto' : '36px'};
    padding: ${({ hasIcon, hasText }) => hasIcon && hasText ? '0 16px 0 12px' : !hasIcon && hasText ? '0 16px' : '0'};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-width: 0px;
    background-color: ${({ buttonType }) => buttonType === 'primary' ? COLOR.primary : COLOR.neutral};
    color: ${({ buttonType }) => (buttonType === 'secondary' || buttonType === 'just-text') ? COLOR.primary : buttonType === 'just-text-disabled' ? COLOR.disabled : COLOR.neutral};
    box-shadow: ${({ buttonType }) => (buttonType === 'just-text' || buttonType === 'just-text-disabled') ? 0 : '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)'};
    outline-color: ${({ buttonType }) => (buttonType === 'just-text' || buttonType === 'just-text-disabled') ? COLOR.mediumEmphasis : COLOR.highEmphasis};
    cursor: pointer;

    :hover {
        background-color: ${({ buttonType }) => (buttonType === 'just-text' || buttonType === 'just-text-disabled') ? COLOR.neutral : buttonType === 'primary' ? COLOR.primaryHover : COLOR.neutralHover};
    }

    :active {
        background-color: ${({ buttonType }) => (buttonType === 'just-text' || buttonType === 'just-text-disabled') ? COLOR.neutral : buttonType === 'primary' ? COLOR.primaryActive : COLOR.neutralActive};
    }
`

const IconContainer = styled.div<IStyledText>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ hasText }) => hasText ? '8px' : 0};
`