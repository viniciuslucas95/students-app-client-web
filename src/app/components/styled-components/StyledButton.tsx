import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'

export const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: ${COLOR.secondary};
    background-color: ${COLOR.primary};
    border-width: 0;
    border-radius: 0.25rem;
    padding: 0.5rem 0.7rem;

    &:hover {
        color: ${COLOR.secondaryDark1};
        background-color: ${COLOR.primaryDark1};

    &:active{
        color: ${COLOR.secondaryDark2};
        background-color: ${COLOR.primaryDark2};
    }
  }
`