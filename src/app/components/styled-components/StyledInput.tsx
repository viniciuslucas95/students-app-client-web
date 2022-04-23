import styled from 'styled-components'
import { COLOR } from '../../constants/color.constant'

export const StyledInput = styled.input`
    padding: 0.25rem 0.4rem;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: ${COLOR.border};

    :focus {
        outline-color: ${COLOR.primary};
    }
`