import { useState } from 'react'
import { PageContainer } from '../components/PageContainer'
import { IStudentsResult, StudentsTable } from '../components/students-table/StudentsTable'

const fakeStudents = Array(81).fill({
    name: 'Carlos Daniel Almeida Pereira Costa Pinto',
    rg: 458769548,
    cpf: 21564587452,
    age: 28,
    class: 'EPCAR',
    address: 'Rua digdin madara com feijão e batata e frango, 2930'
})

const emptyStudents: IStudentsResult = {
    students: fakeStudents,
    results: 81
}

export function StudentsListPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [studentsResult, setStudentsResult] = useState<IStudentsResult>(emptyStudents)

    return (
        <PageContainer headerTitle='Lista de Alunos'>
            <StudentsTable setCurrentPage={setCurrentPage} currentPage={currentPage} studentsResult={studentsResult} />
        </PageContainer >
    )
}