import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'

interface IProps {
    isSecondary?: boolean
}

export const StyledButton = styled.button<IProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    width: fit-content;
    min-width: 4rem;
    color: ${({ isSecondary }) => isSecondary ? COLOR.primary : COLOR.secondary};
    background-color: ${({ isSecondary }) => isSecondary ? COLOR.secondary : COLOR.primary};
    border-width: ${({ isSecondary }) => isSecondary ? '1px' : 0};
    border-color: ${COLOR.primary};
    border-radius: 0.25rem;
    padding: 0.5rem 0.7rem;
    outline-color: ${COLOR.primaryOutline};

    &:hover {
        color: ${({ isSecondary }) => isSecondary ? COLOR.primaryHover : COLOR.secondaryHover};
        background-color: ${({ isSecondary }) => isSecondary ? COLOR.secondaryHover : COLOR.primaryHover};

    &:active{
        color: ${({ isSecondary }) => isSecondary ? COLOR.primaryActive : COLOR.secondaryActive};
        background-color: ${({ isSecondary }) => isSecondary ? COLOR.secondaryActive : COLOR.primaryActive};
    }
  }
`