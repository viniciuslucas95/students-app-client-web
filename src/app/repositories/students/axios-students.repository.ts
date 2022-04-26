import { StudentsRepository } from "./students.repository"
import axios from 'axios'
import { StudentsResult } from "../../dto/students.dto"
import { QueryDto } from "../../dto/common.dto"
import { formatUrlQuery } from "../helpers/format-url-query.helper"

export class AxiosStudentsRepository implements StudentsRepository {
    constructor(public baseUrl: string) { }

    async find(query?: QueryDto): Promise<StudentsResult> {
        const { data } = await axios.get<StudentsResult>(`${this.baseUrl}${query ? formatUrlQuery(query) : ''}`)

        return data
    }
}