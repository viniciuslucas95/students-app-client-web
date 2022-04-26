import { StudentsResult } from "../../dto/students.dto"

export interface StudentsRepository {
    baseUrl: string
    find(): Promise<StudentsResult>
}