import { QueryDto } from "../../dto/common.dto"
import { StudentsResult } from "../../dto/students.dto"

export interface StudentsRepository {
    baseUrl: string
    find(query: QueryDto): Promise<StudentsResult>
}