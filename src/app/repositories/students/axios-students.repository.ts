import { IStudentsRepository } from "./students-interface.repository"
import axios from 'axios'
import { IStudentsResult } from "../../dto/students.dto"

export class AxiosStudentsRepository implements IStudentsRepository {
    constructor(public baseUrl: string) { }

    async getAll(): Promise<IStudentsResult> {
        const { data } = await axios.get<IStudentsResult>(this.baseUrl)

        return data
    }
}