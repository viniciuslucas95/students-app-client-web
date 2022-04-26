import { useEffect, useState } from 'react'
import { PlusIcon } from '../../assets/svgs/PlusIcon'
import { Button } from '../components/Button'
import { PageContainer } from '../components/page-container/PageContainer'
import { MAX_STUDENTS_ON_PAGE, StudentsTable } from '../components/students-table/StudentsTable'
import { COLOR } from '../constants/color.constant'
import { QueryDto } from '../dto/common.dto'
import { Student } from '../dto/students.dto'
import { AxiosStudentsRepository } from '../repositories/students/axios-students.repository'

interface PagesData {
    [key: string]: Student[];
}

interface StudentsData {
    pages: PagesData,
    results: number
}

const emptyStudentsData: StudentsData = {
    pages: {},
    results: 0
}

const studentsRepository = new AxiosStudentsRepository('http://localhost:3001/students')

export function StudentsListPage() {
    const [studentsData, setStudentsData] = useState<StudentsData>(emptyStudentsData)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (studentsData.results === 0) return
        if (studentsData.pages[`${currentPage}`]) return

        (async () => {
            await fetchStudents({
                limit: MAX_STUDENTS_ON_PAGE,
                offset: currentPage > 1 ? (currentPage - 1) * MAX_STUDENTS_ON_PAGE : undefined
            }, currentPage)
        })()
    }, [currentPage])

    async function fetchStudents(query: QueryDto = { limit: MAX_STUDENTS_ON_PAGE }, pageToSetData: number = 1) {
        try {
            const { students, results } = await studentsRepository.find(query);

            setStudentsData(previousState => {
                return {
                    pages: {
                        ...previousState.pages,
                        [`${pageToSetData}`]: students
                    }, results
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    async function handleFetch() {
        setCurrentPage(1)
        setStudentsData(emptyStudentsData)
        await fetchStudents()
    }

    return (
        <PageContainer headerTitle='Lista de Alunos'>
            <Button style={{ margin: '32px auto 0 auto' }} onClick={handleFetch} content={{ icon: <PlusIcon color={COLOR.neutral} />, text: 'GET ALL TEST' }} />
            <StudentsTable setCurrentPage={setCurrentPage} currentPage={currentPage} studentsResult={{ results: studentsData.results, students: studentsData.pages[`${currentPage}`] ?? [] }} />
        </PageContainer >
    )
}