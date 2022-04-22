import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'

interface IProps {
    isActive?: boolean
}

export const StyledTextButton = styled.button<IProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    width: fit-content;
    color: ${({ isActive }) => isActive ? COLOR.primary : COLOR.neutralDeactivated};
    background-color: ${COLOR.secondary};
    border: 0;
    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    outline-color: ${COLOR.primaryOutline};
    cursor: pointer;
`