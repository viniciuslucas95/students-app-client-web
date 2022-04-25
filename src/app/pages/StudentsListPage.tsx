import { useEffect, useState } from 'react'
import { PlusIcon } from '../../assets/svgs/PlusIcon'
import { Button } from '../components/Button'
import { PageContainer } from '../components/PageContainer'
import { IStudent, IStudentsResult, MAX_STUDENTS_ON_PAGE, StudentsTable } from '../components/students-table/StudentsTable'
import { COLOR } from '../constants/color.constant'

const emptyStudents: IStudentsResult = {
    students: [],
    results: 0
}

const fakeStudentData: IStudent = {
    name: 'Carlos Daniel Almeida Pereira Costa Pinto',
    rg: 458769548,
    cpf: 21564587452,
    age: 28,
    class: 'EPCAR',
    address: 'Rua digdin madara com feijão e batata e frango, 2930'
}

export function StudentsListPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [studentsResult, setStudentsResult] = useState<IStudentsResult>(emptyStudents)

    useEffect(() => {
        if (studentsResult.results === 0) return

        if (currentPage * MAX_STUDENTS_ON_PAGE < studentsResult.students.length) return

        setStudentsResult(prevState => ({
            results: prevState.results,
            students: [...prevState.students, ...Array(MAX_STUDENTS_ON_PAGE).fill(fakeStudentData)]
        }))
    }, [currentPage])

    function setFakeStudents() {
        setStudentsResult({
            students: Array(MAX_STUDENTS_ON_PAGE).fill(fakeStudentData),
            results: 81
        })
    }

    return (
        <PageContainer headerTitle='Lista de Alunos'>
            <Button style={{ margin: '32px auto 0 auto' }} onClick={() => setFakeStudents()} content={{ icon: <PlusIcon color={COLOR.neutral} />, text: 'Buscar Fake Alunos' }} />
            <StudentsTable setCurrentPage={setCurrentPage} currentPage={currentPage} studentsResult={studentsResult} />
        </PageContainer >
    )
}