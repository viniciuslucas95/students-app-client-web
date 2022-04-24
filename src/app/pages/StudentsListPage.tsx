import { PlusIcon } from '../../assets/svgs/PlusIcon'
import { Button } from '../components/Button'
import { PageContainer } from '../components/PageContainer'
import { StudentsTable } from '../components/students-table/StudentsTable'

const students = Array(10).fill({
    name: 'Carlos Daniel Almeida Pereira Costa Pinto',
    rg: 458769548,
    cpf: 21564587452,
    age: 28,
    class: 'EPCAR',
    address: 'Rua digdin madara com feijão e batata e frango, 2930'
})

export function StudentsListPage() {
    return (
        <PageContainer header={
            {
                title: 'Lista de Alunos',
                button: <Button icon={<PlusIcon size='small' />} text='Adicionar' />
            }
        }>
            <StudentsTable data={{
                students, result: {
                    currentPage: 7,
                    resultAmount: 140
                }
            }} />
        </PageContainer>
    )
}