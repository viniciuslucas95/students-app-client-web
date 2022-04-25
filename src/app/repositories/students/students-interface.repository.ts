import { IStudentsResult } from "../../dto/students.dto"

export interface IStudentsRepository {
    baseUrl: string
    getAll(): Promise<IStudentsResult>
}