import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { InputWithLabel } from '../components/InputWithLabel'
import { PageContainer } from '../components/PageContainer'
import { StyledButton } from '../components/styled-components/StyledButton'

export function StudentCreationPage() {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')

    return <PageContainer headerTitle='Criação de Aluno'>
        <Container>
            <RowContainer>
                <InputWithLabel width='big' label='Nome' placeholder='Nome' value={name} onChange={setName} />
                <InputWithLabel width='small' label='Idade' placeholder='Idade' value={age} onChange={setAge} />
            </RowContainer>
            <RowContainer style={{ marginTop: '2rem' }}>
                <StyledButton onClick={() => navigate('/')}>Cancelar</StyledButton>
                <StyledButton>Criar</StyledButton>
            </RowContainer>
        </Container>
    </PageContainer>
}

const Container = styled.div`
    margin: auto;
    width: 17rem;
`

const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`