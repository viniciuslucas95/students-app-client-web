import { StudentsRepository } from "./students.repository"
import axios from 'axios'
import { StudentsResult } from "../../dto/students.dto"

export class AxiosStudentsRepository implements StudentsRepository {
    constructor(public baseUrl: string) { }

    async find(): Promise<StudentsResult> {
        const { data } = await axios.get<StudentsResult>(this.baseUrl)

        return data
    }
}