import styled from 'styled-components'
import { COLOR } from '../constants/color.constant'

interface IProps {
    text?: string
    icon?: JSX.Element
}

export function Button({ text, icon }: IProps) {
    return <StyledButton hasIcon={icon ? true : false} hasText={text ? true : false}>
        {icon ? <IconContainer hasText={text ? true : false}>
            {icon}
        </IconContainer> : null}
        {text ? <ButtonText>{text}</ButtonText> : null}
    </StyledButton>
}

interface IStyledButtonProps {
    hasIcon: boolean
    hasText: boolean
}

const StyledButton = styled.button<IStyledButtonProps>`
    display: flex;
    height: 36px;
    width: ${({ hasText }) => hasText ? 'auto' : '36px'};
    padding: ${({ hasIcon, hasText }) => hasIcon && hasText ? '0 16px 0 12px' : !hasIcon && hasText ? '0 16px' : '0'};
    justify-content: center;
    align-items: center;
    border-radius: ${({ hasText }) => hasText ? '4px' : '24px'};
    border-width: 0px;
    background-color: ${COLOR.primary};
    color: ${COLOR.neutral};
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    outline-color: ${COLOR.highEmphasis};

    :hover {
        background-color: ${COLOR.primaryHover};
    }

    :active {
        background-color: ${COLOR.primaryActive};
    }
`

const IconContainer = styled.div<Omit<IStyledButtonProps, 'hasIcon'>>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ hasText }) => hasText ? '8px' : 0};
`

const ButtonText = styled.span`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.25px;
    font-weight: 500;
    text-transform: uppercase;
`